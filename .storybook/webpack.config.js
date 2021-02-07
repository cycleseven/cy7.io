const path = require("path");

module.exports = async ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
  },
});
