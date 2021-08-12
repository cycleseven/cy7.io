/* eslint-disable global-require */

import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { Cy7ThemeProvider } from "@cy7/designSystem";

/**
 * Wrap all stories with cy7 default styles.
 */
addDecorator((storyFn) => <Cy7ThemeProvider>{storyFn()}</Cy7ThemeProvider>);

/**
 * Note: the return value defines the ordering of the stories.
 */
function loadStories() {
  const introStory = require("../src/@cy7/docs/overview/Intro.stories.mdx");
  const techStackStory = require("../src/@cy7/docs/overview/TechStack.stories.mdx");
  const designSystemStory = require("../src/@cy7/docs/overview/DesignSystem.stories.mdx");
  const designSystemSection = require.context(
    "../src/@cy7/docs/design-system",
    true,
    /\.stories\.(mdx|js)$/
  );
  const componentsSection = require.context(
    "../src/@cy7/docs/components",
    true,
    /\.stories\.(mdx|js)$/
  );
  const gatsbySection = require.context(
    "../src/@cy7/docs/gatsby",
    true,
    /\.stories\.(mdx|js)$/
  );
  const otherStories = require.context(
    "../src/@cy7/docs",
    true,
    /\.stories\.(mdx|js)$/
  );

  return [
    introStory,
    techStackStory,
    designSystemStory,
    ...designSystemSection
      .keys()
      .map((filename) => designSystemSection(filename)),
    ...componentsSection.keys().map((filename) => componentsSection(filename)),
    ...gatsbySection.keys().map((filename) => gatsbySection(filename)),
    ...otherStories.keys().map((filename) => otherStories(filename)),
  ];
}

configure(loadStories, module);
