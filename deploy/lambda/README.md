# Lambda functions for cy7.io

This directory contains a [Serverless Framework](https://www.serverless.com/framework/docs/) project that manages some serverless functions used by [Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html) to provide custom CloudFront behaviour.

Check `handlers.js` for the logic itself. Run `pnpm exec sls deploy` to deploy updates to the lambda functions.

## Integration with Terraform

The CloudFront distribution for [cy7.io](https://cy7.io) is provisioned in Terraform. That CloudFront distribution references the Lambda@Edge functions created by this project by ARN.

That means deployment of changes to the Lambda@Edge functions must happen in two steps:

1. Deploy the updated Lambda functions via `pnpm exec sls deploy`.
1. Run `terraform apply` (from the `deploy/infra` directory of this repo).

> 💡 **How it works:** the CloudFormation stack created by Serverless Framework exposes the qualified Lambda ARNs via **CloudFormation Exports**. The Terraform config reads these via the [`aws_cloudformation_export`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/cloudformation_export) data provider.
