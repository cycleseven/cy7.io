/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");
const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Enable src-relative imports via Webpack
  // eg. import { Logo } from "designSystem"
  actions.setWebpackConfig({
    resolve: {
      ...getConfig().resolve,
      modules: [path.join(getConfig().context, "src"), "node_modules"]
    }
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    // Format the date for blog posts
    // TODO: seems quite unit testable actually...
    const date = format(new Date(node.frontmatter.date), "do MMMM yyyy");
    createNodeField({ node, name: "friendlyDate", value: date });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query blogPosts {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        slug: node.frontmatter.slug
      }
    });
  });
};
