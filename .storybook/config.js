import React from "react";
import { addDecorator, configure } from "@storybook/react";

import { Cy7ThemeProvider } from "../src/designPrimitives";

/**
 * Gatsby's Link overrides:
 *
 * Gatsby defines a global called ___loader. It's mocked out to prevent its
 * method calls from creating console errors.
 */
// global.___loader = {
//   enqueue: () => {},
//   hovering: () => {}
// };

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("Navigate to:")(pathname);
};

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
