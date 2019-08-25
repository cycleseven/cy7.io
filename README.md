# cy7.io

Source code for the [cy7.io](https://cy7.io) website, built with Gatsby.

## Getting started with local development

Tested with **Node v12.9.0** and **Yarn 1.17.3**.

Install dependencies, then start the development server.

```bash
yarn
yarn start
```

## Git hooks

[Lefthook](https://github.com/Arkweid/lefthook) is used to manage hooks, and is automatically installed along with other dependencies using `yarn`.

Currently the hooks are:

- On **commit**, code is automatically formatted with Prettier.
- On **push**, changed files from the upstream branch are linted (with ESLint and Stylelint).

Most checks are performed on **push** instead of **commit**. Hopefully this strikes the right balance between keeping unchecked code out of the remote repo without encumbering local git workflow.
