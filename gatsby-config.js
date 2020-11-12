module.exports = {
  siteMetadata: {
    title: "cy7.io",
    // TODO: make this description more compelling when I have a few posts under the belt
    description:
      "Owen's blog: posts about Javascript, React, and anything web dev.",
    author: "@instructio5",
    socialLinks: {
      name: "Me",
      links: [
        {
          name: "Github",
          type: "external",
          url: "https://github.com/cycleseven"
        },
        {
          name: "Linkedin",
          type: "external",
          url: "https://www.linkedin.com/in/cycleseven/"
        },
        {
          name: "Email me",
          type: "email",
          url: "hello@cy7.io"
        }
      ]
    },
    metaLinks: {
      name: "About this site",
      links: [
        // {
        //   name: "Developer docs (Storybook)",
        //   type: "external",
        //   url: "https://storybook.cy7.io"
        // },
        {
          name: "Source code (Gitlab)",
          type: "external",
          url: "https://gitlab.com/cycleseven/cy7"
        }
      ]
    },
    favouriteBitsOfTheInternet: [
      {
        name: "astronaut.io",
        description: "",
        url: "http://astronaut.io"
      },
      {
        name: "it is as if you were doing work",
        description: "",
        url: "https://pippinbarr.github.io/itisasifyouweredoingwork"
      },
      {
        name: "Ben Halpern's personal site",
        description: "No words necessary",
        url: "https://benhalpern.com"
      },
      {
        name: "Old CSS, New CSS",
        description:
          '"The answer, as every web dev now knows, is XMLHttpRequest — named for the fact that nobody has ever once used it to request XML."',
        url: "https://eev.ee/blog/2020/02/01/old-css-new-css"
      },
      {
        name: "Me reviewing pull requests",
        url: "https://twitter.com/rickhanlonii/status/1195738341301522432"
      }
    ]
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

    // Output a schema.json on running Gatsby dev server
    "gatsby-plugin-extract-schema"

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ]
};
