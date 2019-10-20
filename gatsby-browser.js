/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { Cy7ThemeProvider } from "./src/designPrimitives";

/* eslint-disable-next-line react/prop-types */
function wrapRootElement({ element }) {
  return <Cy7ThemeProvider>{element}</Cy7ThemeProvider>;
}

export { wrapRootElement };
