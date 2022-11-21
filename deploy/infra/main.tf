provider "aws" {
  region = "us-east-1"
}

provider "aws" {
  alias  = "ireland"
  region = "eu-west-1"
}

terraform {
  required_version = "~> 1.2.0"

  backend "s3" {
    bucket = "tfstate.cy7.io"
    key    = "website"
    region = "us-east-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.30"
    }
  }
}

locals {
  root_domain = "cy7.io"
}

data "aws_cloudformation_export" "subdirectory_index_lambda_arn" {
  name = "cy7-subdirectory-index-lambda-arn"
}

data "aws_cloudformation_export" "redirect_lambda_arn" {
  name = "cy7-redirect-lambda-arn"
}


module "website" {
  source = "./modules/static_site"

  providers = {
    aws         = aws
    aws.ireland = aws.ireland
  }

  alias_domains = ["www.cy7.io"]
  edge_lambdas = [
    {
      event_type = "viewer-request"
      lambda_arn = data.aws_cloudformation_export.redirect_lambda_arn.value
    },
    {
      event_type = "origin-request"
      lambda_arn = data.aws_cloudformation_export.subdirectory_index_lambda_arn.value
    }
  ]
  full_domain = "cy7.io"
  root_domain = local.root_domain
}

module "storybook" {
  source = "./modules/static_site"

  providers = {
    aws         = aws
    aws.ireland = aws.ireland
  }

  full_domain = "storybook.cy7.io"
  root_domain = local.root_domain
}
