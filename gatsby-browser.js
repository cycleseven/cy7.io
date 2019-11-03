/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { Cy7ThemeProvider } from "@cy7/designSystem";
import React from "react";

/* eslint-disable-next-line react/prop-types */
function wrapRootElement({ element }) {
  return <Cy7ThemeProvider>{element}</Cy7ThemeProvider>;
}

export { wrapRootElement };
