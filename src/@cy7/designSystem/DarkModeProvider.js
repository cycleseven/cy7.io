import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@cy7/designSystem/themeModes";

function DarkModeProvider(props) {
  return <ThemeProvider theme={darkTheme} {...props} />;
}

export { DarkModeProvider };
