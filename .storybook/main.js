module.exports = {
  addons: ["@storybook/addon-docs/preset"],
  core: {
    builder: "webpack5",
  },
  stories: [
    // Intro
    "../src/@cy7/docs/intro/HelloWorld.stories.mdx",
    "../src/@cy7/docs/intro/ProjectLayout.stories.mdx",

    // Guides
    "../src/@cy7/docs/guides/Blogging.stories.mdx",
    "../src/@cy7/docs/guides/CodeQuality.stories.mdx",
    "../src/@cy7/docs/guides/Accessibility.stories.mdx",
    "../src/@cy7/docs/guides/TypeScript.stories.mdx",
    "../src/@cy7/docs/guides/Testing.stories.mdx",
    "../src/@cy7/docs/guides/Deployment.stories.mdx",

    // Design system
    "../src/@cy7/docs/design-system/GettingStarted.stories.mdx",
    "../src/@cy7/docs/design-system/**/*.stories.{mdx,tsx}",

    // Website
    "../src/@cy7/docs/website/Overview.stories.mdx",
    "../src/@cy7/docs/website/**/*.stories.{mdx,tsx}",
  ],
};
