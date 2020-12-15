provider "aws" {
  region  = "us-east-1"
  version = "~> 2.29"
}

terraform {
  backend "s3" {
    bucket = "tfstate.cy7.io"
    key    = "website"
    region = "us-east-1"
  }
}

locals {
  root_domain = "cy7.io"
}

module "website" {
  source = "./modules/static_site"

  alias_domains = ["www.cy7.io"]
  edge_lambdas = [
    {
      event_type = "viewer-request"
      lambda_arn = jsondecode(file("${path.root}/../lambda/outputs.json")).RedirectLambdaFunctionQualifiedArn
    },
    {
      event_type = "origin-request"
      lambda_arn = jsondecode(file("${path.root}/../lambda/outputs.json")).SubdirectoryIndexLambdaFunctionQualifiedArn
    }
  ]
  full_domain = "cy7.io"
  root_domain = local.root_domain
}

module "storybook" {
  source = "./modules/static_site"

  full_domain = "storybook.cy7.io"
  root_domain = local.root_domain
}
