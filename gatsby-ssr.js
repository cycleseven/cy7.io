/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { Cy7ThemeProvider } from "@cy7/designSystem";
import React from "react";

/* eslint-disable-next-line react/prop-types */
function wrapRootElement({ element }) {
  return <Cy7ThemeProvider>{element}</Cy7ThemeProvider>;
}

function onRenderBody({ setHtmlAttributes }) {
  // Set lang="en" attribute in root <html> element
  setHtmlAttributes({
    lang: "en"
  });
}

export { wrapRootElement, onRenderBody };
