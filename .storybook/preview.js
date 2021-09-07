/* eslint-disable global-require,@typescript-eslint/no-var-requires */

import { addDecorator, configure } from "@storybook/react";

/**
 * Wrap all stories with cy7 default styles.
 */
addDecorator((storyFn) => storyFn());

/**
 * Note: the return value defines the ordering of the stories.
 */
function loadStories() {
  //  Intro
  const helloWorldStory = require("../src/@cy7/docs/intro/HelloWorld.stories.mdx");
  const projectLayoutStory = require("../src/@cy7/docs/intro/ProjectLayout.stories.mdx");

  // Guides, in order
  const bloggingStory = require("../src/@cy7/docs/guides/Blogging.stories.mdx");
  const codeQualityStory = require("../src/@cy7/docs/guides/CodeQuality.stories.mdx");
  const accessibilityStory = require("../src/@cy7/docs/guides/Accessibility.stories.mdx");
  const typescriptStory = require("../src/@cy7/docs/guides/TypeScript.stories.mdx");
  const testingStory = require("../src/@cy7/docs/guides/Testing.stories.mdx");
  const deploymentStory = require("../src/@cy7/docs/guides/Deployment.stories.mdx");

  // Design system docs
  const designSystemIntroStory = require("../src/@cy7/docs/design-system/GettingStarted.stories.mdx");
  const designSystemComponents = require.context(
    "../src/@cy7/docs/design-system",
    true,
    /\.stories\.(mdx|js)$/
  );

  // Other
  const websiteSection = require.context(
    "../src/@cy7/docs/website",
    true,
    /\.stories\.(mdx|js)$/
  );

  return [
    helloWorldStory,
    projectLayoutStory,
    bloggingStory,
    codeQualityStory,
    accessibilityStory,
    typescriptStory,
    testingStory,
    deploymentStory,
    designSystemIntroStory,
    ...designSystemComponents
      .keys()
      .map((filename) => designSystemComponents(filename)),
    ...websiteSection.keys().map((filename) => websiteSection(filename)),
  ];
}

configure(loadStories, module);
