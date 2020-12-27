import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyles } from "./GlobalStyles";

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
