variable "root_domain" {
  description = "The bare/root domain, eg. cy7.io"
  type        = string
}

variable "full_domain" {
  description = "The full URL for the static site, eg. storybook.cy7.io, cy7.io"
  type        = string
}

variable "alias_domains" {
  default     = []
  description = "Other domains that should point to the same bucket."
  type        = list(string)
}

variable "edge_lambdas" {
  default     = []
  description = "Optional Lambda@Edge definitions for the CloudFront distribution"
  type = list(object({
    event_type = string,
    lambda_arn = string,
  }))
}
