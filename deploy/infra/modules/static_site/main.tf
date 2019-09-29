locals {
  s3_origin_id = "S3-cy7.io"
  bare_domain  = "cy7.io"
  www_domain   = "www.cy7.io"
}

data "aws_acm_certificate" "root" {
  domain = local.bare_domain
}

data "terraform_remote_state" "core" {
  backend = "s3"

  config = {
    bucket = "tfstate.cy7.io"
    key    = "core"
    region = "us-east-1"
  }
}

# Policy granting the origin access identity permission to read from the S3 origin bucket.
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.root.arn}/*"]

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

# A special type of user that allows us to expose the origin bucket only via CloudFront.
# https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html
resource "aws_cloudfront_origin_access_identity" "main" {
  comment = local.bare_domain
}

# The origin bucket that holds the static files for the website. Note the bucket is private: that's because the contents
# are exposed via CloudFront only.
resource "aws_s3_bucket" "root" {
  acl    = "private"
  bucket = local.bare_domain

  tags = {
    project = "website"
  }
}

# Applies the policy (see aws_iam_policy_document.s3_policy above) to the bucket, granting CloudFront read access to
# the private origin bucket.
resource "aws_s3_bucket_policy" "root" {
  bucket = aws_s3_bucket.root.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_cloudfront_distribution" "web" {
  aliases             = [local.bare_domain, local.www_domain]
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
    acm_certificate_arn = data.aws_acm_certificate.root.arn
    ssl_support_method  = "sni-only"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404/index.html"
  }
}

resource "aws_route53_record" "root" {
  type    = "A"
  name    = local.bare_domain
  zone_id = data.terraform_remote_state.core.outputs.route53_primary_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = aws_cloudfront_distribution.web.hosted_zone_id
  }
}

resource "aws_route53_record" "www" {
  type    = "A"
  name    = local.www_domain
  zone_id = data.terraform_remote_state.core.outputs.route53_primary_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = aws_cloudfront_distribution.web.hosted_zone_id
  }
}