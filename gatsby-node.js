/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      ...getConfig().resolve,
      modules: [path.join(getConfig().context, "src"), "node_modules"]
    }
  });
};
