# Lambda functions for cy7.io

This directory contains a [Serverless Framework](https://www.serverless.com/framework/docs/) project that manages some serverless functions used by [Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html) to provide custom Cloudfront behaviour.

Check `handlers.js` for the logic itself. Run `yarn sls deploy` to deploy updates to the lambda functions.

## Integration with Terraform

The Cloudfront distribution is provisioned in Terraform. So typically you'd first deploy the updated lambda functions, then run `terraform apply` (from the `deploy/infra` directory of this repo).

Terraform can read info about the deployed Lambda functions (such as their ARNs) via the `outputs.json` file generated during `sls deploy` by the [`serverless-stack-output`](https://www.serverless.com/plugins/serverless-stack-output) plugin.

(To read `outputs.json`, you can string together Terraform's [`jsondecode`](https://www.terraform.io/docs/configuration/functions/jsondecode.html) and [`file`](https://www.terraform.io/docs/configuration/functions/file.html) functions!)
