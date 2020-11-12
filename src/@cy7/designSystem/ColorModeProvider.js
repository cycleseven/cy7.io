import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, warningTheme } from "@cy7/designSystem/themeModes";

const themes = {
  dark: darkTheme,
  warning: warningTheme
};

function ColorModeProvider({ mode, ...props }) {
  const theme = themes[mode];
  return <ThemeProvider theme={theme} {...props} />;
}

ColorModeProvider.propTypes = {
  mode: PropTypes.oneOf(["dark", "warning"]).isRequired
};

export { ColorModeProvider };
