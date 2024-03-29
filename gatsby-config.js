module.exports = {
  siteMetadata: {
    title: "cy7.io",
    // TODO: make this description more compelling when I have a few posts under the belt
    description:
      "Owen Gillespie's blog: posts about Javascript, React, and anything web dev.",
    author: "@instructio5",
    socialLinks: {
      name: "Me",
      links: [
        {
          name: "Github",
          type: "external",
          url: "https://github.com/cycleseven",
        },
        {
          name: "LinkedIn",
          type: "external",
          url: "https://www.linkedin.com/in/cycleseven/",
        },
        {
          name: "Email me",
          type: "email",
          url: "hello@cy7.io",
        },
      ],
    },
    metaLinks: {
      name: "About this site",
      links: [
        {
          name: "Source code (GitHub)",
          type: "external",
          url: "https://github.com/cycleseven/cy7.io",
        },
        {
          name: "Developer guide (Storybook)",
          type: "external",
          url: "https://storybook.cy7.io",
        },
      ],
    },
    favouriteBitsOfTheInternet: [
      {
        name: "astronaut.io",
        description: "",
        url: "http://astronaut.io",
      },
      {
        name: "it is as if you were doing work",
        description: "",
        url: "https://pippinbarr.github.io/itisasifyouweredoingwork",
      },
      {
        name: "Ben Halpern's personal site",
        description: "No words necessary",
        url: "https://benhalpern.com",
      },
      {
        name: "Old CSS, New CSS",
        description:
          '"The answer, as every web dev now knows, is XMLHttpRequest — named for the fact that nobody has ever once used it to request XML."',
        url: "https://eev.ee/blog/2020/02/01/old-css-new-css",
      },
      {
        name: "Me reviewing pull requests",
        url: "https://twitter.com/rickhanlonii/status/1195738341301522432",
      },
      {
        name: "It's fascinating to imagine the amazing things people will do with their computer in 30 years",
        url: "https://twitter.com/dubenko_/status/1218268093669048326",
      },
      {
        name: "Unrelated vs orthogonal",
        url: "https://twitter.com/markdalgleish/status/1201610777372721152",
      },
      {
        name: "HTMLMediaElement.canPlayType()",
        description:
          "The greatest API of all time. The return value will SHOCK you",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-pnpm",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogPosts",
        path: `${__dirname}/src/@cy7/website/blog/posts`,
      },
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
        icon: "src/images/favicon.png",
      },
    },

    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/@cy7/typography/index.ts",
      },
    },

    // Stitches (CSS-in-JS), set up via a custom plugin
    {
      resolve: require.resolve("./src/@cy7/gatsby-plugin-stitches"),
    },

    // Output a schema.json on running Gatsby dev server
    "gatsby-plugin-extract-schema",

    // Generate type defs for GraphQL queries
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "./generated/@cy7/gql-types/index.ts",
        documentPaths: ["./src/**/*.{ts,tsx}"],
      },
    },

    // Enable to open bundle treemap on build
    // "gatsby-plugin-webpack-bundle-analyser-v2"

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    "gatsby-plugin-no-javascript",
  ],
};
