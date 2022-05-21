terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.30"
      configuration_aliases = [ aws.ireland ]
    }
  }
}

locals {
  s3_origin_id = "S3-${var.full_domain}"
  all_domains  = concat([var.full_domain], var.alias_domains)
}

data "terraform_remote_state" "core" {
  backend = "s3"

  config = {
    bucket = "tfstate.cy7.io"
    key    = "core"
    region = "us-east-1"
  }
}

data "aws_acm_certificate" "root" {
  domain = var.root_domain
}

data "aws_iam_policy_document" "s3_root_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = [
      "${aws_s3_bucket.root.arn}/*"
    ]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.main.iam_arn]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.root.arn]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.main.iam_arn]
    }
  }
}

# The origin bucket that holds the static files for the website. Note the bucket is private: that's because the contents
# are exposed via CloudFront only.
resource "aws_s3_bucket" "root" {
  provider = aws.ireland

  acl    = "private"
  bucket = var.full_domain

  tags = {
    project = "website"
  }
}

resource "aws_cloudfront_origin_access_identity" "main" {
  comment = var.full_domain
}

resource "aws_s3_bucket_policy" "new_root" {
  provider = aws.ireland

  bucket = aws_s3_bucket.root.id
  policy = data.aws_iam_policy_document.s3_root_policy.json
}

resource "aws_cloudfront_distribution" "web" {
  aliases             = local.all_domains
  default_root_object = "index.html"
  enabled             = true
  is_ipv6_enabled     = true

  tags = {
    project = "website"
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id       = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    dynamic "lambda_function_association" {
      for_each = var.edge_lambdas

      content {
        event_type = lambda_function_association.value.event_type
        lambda_arn = lambda_function_association.value.lambda_arn
      }
    }
  }

  origin {
    domain_name = aws_s3_bucket.root.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.root.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404/index.html"
  }
}

resource "aws_route53_record" "root" {
  for_each = toset(local.all_domains)

  type    = "A"
  name    = each.value
  zone_id = data.terraform_remote_state.core.outputs.route53_primary_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = aws_cloudfront_distribution.web.hosted_zone_id
  }
}
