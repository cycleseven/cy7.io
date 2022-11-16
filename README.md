# cy7.io

Source code for [cy7.io](https://cy7.io), built with Gatsby.

## Getting started with local development

System requirements for running this project locally are:

- Node.js v16
- pnpm v7
- Terraform v1

1. **Check the `engines` field of `package.json` for the required versions of `node` and `pnpm`.** Make sure you have those installed.

   You can check with the following commands:

   ```
   $ node --version
   v16.18.0

   $ pnpm --version
   7.16.1
   ```

2. **Install dependencies.**

   ```bash
   pnpm install
   ```

3. **That's it!** Happy developing. You can start an instance of Gatsby's [development server](https://www.gatsbyjs.com/docs/tutorial/part-1/#run-your-site-locally) like this:

   ```bash
   pnpm exec gatsby develop
   ```

   Or equivalently:

   ```bash
   pnpm start
   ```

   Once that's running, navigate to [localhost:8000](http://localhost:8000/) in your browser of choice to view the site.

### Terraform

The Terraform config that defines the infrastructure for the website is part of this codebase, and is also subject to checks via Git hooks (see below).

That means that for now, in practice, Terraform is also a requirement for developing on the project. Grab a copy of the `required_version` specified in `deploy/infra/main.tf` from [Terraform's download page](https://www.terraform.io/downloads.html).

> **TODO:** provide better support for devs without `terraform` on their machine, or with different versions. Terraform code formatting checks shouldn't be required for frontend work.

## Git hooks

To improve code quality, automated checks take place when committing and pushing code via `git commit` and `git push`, using [Git hooks](https://www.atlassian.com/git/tutorials/git-hooks). These are set up for you behind-the-scenes when installing dependencies with `pnpm` by [Lefthook](https://github.com/evilmartians/lefthook).

You can read more about this project's code quality guidance in the [developer guide](https://storybook.cy7.io/?path=/docs/guides-code-quality--page).

## Other useful commands

- **Build a production bundle:** `pnpm exec gatsby build` (or just `pnpm run build`)
- **Serve that built production bundle locally:** `pnpm exec gatsby serve`
- **Run Jest test suite:** `pnpm exec jest` (or `pnpm test`)
- **Check for ESLint violations:** `pnpm exec eslint src`
- **Attempt to fix lint violations automatically:** `pnpm exec eslint --fix src`
- **Check for TypeScript errors:** `pnpm exec tsc --noEmit`
- **Check for Prettier violations:** `pnpm exec prettier --check .`
- **Format all code with Prettier:** `pnpm exec prettier --write .`
- **Run all code quality checks at once:** `pnpm exec lefthook run check-all`
- **Run Storybook:** `pnpm run storybook`
- **Build Storybook:** `pnpm exec build-storybook --docs`
