output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.web.id
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.web.domain_name
}

output "cloudfront_zone_id" {
  value = aws_cloudfront_distribution.web.hosted_zone_id
}
