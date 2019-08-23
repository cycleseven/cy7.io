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
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-styled-components"
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ]
};
