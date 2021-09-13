# cy7.io

Source code for [cy7.io](https://cy7.io), built with Gatsby.

## Getting started with local development

This project is built with JavaScript, so you'll need a healthy Node environment on your machine before starting.

The recommended package manager is [Yarn v1](https://classic.yarnpkg.com/lang/en/). These instructions are written with Yarn in mind. But in theory, the equivalent `npm` commands should work just fine if that's your preference.

1. **Check the `engines` field of `package.json` for the required versions of Node and Yarn.** Make sure you have those installed. Check with the following commands if you like:

   ```
   $ node --version
   v16.7.0

   $ yarn --version
   1.22.5
   ```

   **Or, simply attempt step 2.** Yarn will exit with a error if your Node version isn't supported.

   > **Tip:** use the [`n` command line tool](https://github.com/tj/n) to manage your different Node versions for easier switching when changing projects.

2. **Install dependencies.**

   ```bash
   yarn
   ```

   Your `node_modules` will be populated with all third-party code required for this project.

   During this step, Git hooks will be installed behind-the-scenes to perform code quality checks on `git commit` and `git push`. Check out the Code Quality section in the [developer guide](https://storybook.cy7.io/) for more info.

3. **That's it!** Happy developing. You can start an instance of Gatsby's [development server](https://www.gatsbyjs.com/docs/tutorial/part-1/#run-your-site-locally) like this:

   ```bash
   yarn gatsby develop
   ```

   Or equivalently:

   ```bash
   yarn start
   ```

   Once that's running, navigate to [localhost:8000](http://localhost:8000/) in your browser of choice to view the site.

### Terraform

The Terraform config that defines the infrastructure for the website is part of this codebase, and is also subject to checks via Git hooks (see below).

That means that for now, in practice, Terraform is also a requirement for developing on the project. Grab a copy of the `required_version` specified in `deploy/infra/main.tf` from [Terraform's download page](https://www.terraform.io/downloads.html).

> **TODO:** provide better support for devs without `terraform` on their machine, or with different versions. Terraform code formatting checks aren't really required for pure frontend work.

## Git hooks

To improve code quality, automated checks take place when committing and pushing code via `git commit` and `git push`, using [Git hooks](https://www.atlassian.com/git/tutorials/git-hooks). These are set up for you behind-the-scenes when installing dependencies with `yarn` by [Lefthook](https://github.com/evilmartians/lefthook).

You can read more about this project's code quality policy in the developer guide.

## Other useful commands

- **Build a production bundle:** `yarn gatsby build` (or `yarn build`)
- **Serve that built production bundle locally:** `yarn gatsby serve`
- **Run Jest test suite:** `yarn jest` (or `yarn test`)
- **Check for ESLint violations:** `yarn eslint src`
- **Attempt to fix lint violations automatically:** `yarn eslint --fix src`
- **Check for TypeScript errors:** `yarn tsc --noEmit`
- **Check for Prettier violations:** `yarn prettier --check .`
- **Format all code with Prettier:** `yarn prettier --write .`
- **Run all code quality checks at once:** `yarn lefthook run check-all`
- **Run Storybook:** `yarn storybook`
- **Build Storybook:** `yarn build-storybook --docs`
