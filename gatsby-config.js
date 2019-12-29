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
        path: `${__dirname}/blogPosts`
      }
    },
    "gatsby-transformer-remark",
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
        icon: "src/images/favicon.png",
        icons: [
          // 32x32 for desktop browser favicon
          // https://github.com/gatsbyjs/gatsby/issues/19899#issuecomment-562995028
          {
            src: "/favicons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          // 192 and 512 for web app manifest
          // https://developers.google.com/web/fundamentals/web-app-manifest
          {
            src: "/favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
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
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ]
};
