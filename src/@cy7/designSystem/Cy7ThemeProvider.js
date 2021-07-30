import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function Cy7ThemeProvider({ children, ...props }) {
  return (
    <ThemeProvider theme={theme} {...props}>
      {children}
    </ThemeProvider>
  );
}

Cy7ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Cy7ThemeProvider };
