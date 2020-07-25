module.exports = {
  siteMetadata: {
    title: "cy7.io",
    description: "My cool website!!",
    author: "@instructio5"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogPosts",
        path: `${__dirname}/src/@cy7/blog/posts`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "cy7.io",
        short_name: "cy7.io",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/images/favicon.png"
      }
    },

    // Manages the Babel plugin + SSR for styled-components
    "gatsby-plugin-styled-components",

    // Enable optimised import of SVGs
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    },

    // Output a schema.json on running Gatsby dev server
    "gatsby-plugin-extract-schema"

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ]
};
