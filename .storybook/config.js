/* eslint-disable global-require */

import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { Cy7ThemeProvider } from "../src/designPrimitives";

/**
 * Wrap all stories with cy7 default styles.
 */
addDecorator(storyFn => <Cy7ThemeProvider>{storyFn()}</Cy7ThemeProvider>);

/**
 * Note: the return value defines the ordering of the stories.
 */
function loadStories() {
  const gettingStartedStory = require("../src/designPrimitives/docs/GettingStarted.stories.mdx");
  const primitivesSection = require.context(
    "../src/designPrimitives",
    true,
    /\.stories\.(mdx|js)$/
  );
  const otherStories = require.context("../src", true, /\.stories\.(mdx|js)$/);

  return [
    gettingStartedStory,
    ...primitivesSection.keys().map(filename => primitivesSection(filename)),
    ...otherStories.keys().map(filename => otherStories(filename))
  ];
}

configure(loadStories, module);
