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

module "website" {
  source = "./modules/static_site"
}
