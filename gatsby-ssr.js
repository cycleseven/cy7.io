/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { Cy7ThemeProvider } from "@cy7/designSystem";
import { OldBrowserWarning } from "@cy7/gatsby";
import React from "react";

/* eslint-disable-next-line react/prop-types */
function wrapPageElement({ element }) {
  return <Cy7ThemeProvider>{element}</Cy7ThemeProvider>;
}

function onRenderBody({ setHtmlAttributes, setPreBodyComponents }) {
  // Set lang="en" attribute in root <html> element
  setHtmlAttributes({
    lang: "en"
  });

  setPreBodyComponents([<OldBrowserWarning key="old-browser-warning" />]);
}

export { wrapPageElement, onRenderBody };
