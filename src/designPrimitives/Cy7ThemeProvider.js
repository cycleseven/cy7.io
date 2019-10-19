import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";

import * as theme from "./designPrimitives";
import { GlobalStyles } from "./globalStyles";

function Cy7ThemeProvider({ children, ...props }) {
  return (
    <ThemeProvider theme={theme} {...props}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

Cy7ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { Cy7ThemeProvider };
