/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { formatFriendlyDate } = require("./gatsby/utils/dates");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Enable src-relative imports via Webpack
  // eg. import { Logo } from "@cy7/design-system"
  actions.setWebpackConfig({
    resolve: {
      ...getConfig().resolve,
      modules: [
        path.join(getConfig().context, "src"),
        path.join(getConfig().context, "generated"),
        "node_modules",
      ],
    },
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "friendlyDate",
      value: formatFriendlyDate(node.frontmatter.date),
    });
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
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${path.resolve(
        `./src/templates/BlogPost.tsx`
      )}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MdxFrontmatter {
      title: String!
      description: String!
      slug: String!
      images: [File] @fileByRelativePath
    }
  `);
};
