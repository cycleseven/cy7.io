/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = async ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    modules: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../generated"),
      "node_modules",
    ],
  },
});
