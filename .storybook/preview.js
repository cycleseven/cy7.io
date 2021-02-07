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
  const introStory = require("../src/@cy7/designSystem/docs/Intro.stories.mdx");
  const techStackStory = require("../src/@cy7/designSystem/docs/TechStack.stories.mdx");
  const designSystemStory = require("../src/@cy7/designSystem/docs/DesignSystem.stories.mdx");
  const primitivesSection = require.context(
    "../src/@cy7/designSystem/primitives",
    true,
    /\.stories\.(mdx|js)$/
  );
  const otherStories = require.context("../src", true, /\.stories\.(mdx|js)$/);

  return [
    introStory,
    techStackStory,
    designSystemStory,
    ...primitivesSection.keys().map((filename) => primitivesSection(filename)),
    ...otherStories.keys().map((filename) => otherStories(filename)),
  ];
}

configure(loadStories, module);
