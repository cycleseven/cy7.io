import React from "react";
import { ThemeContext } from "styled-components";

/**
 * Wee helper hook to get access to theme variables outside of styled-components.
 *
 * Take a look at theme.js for the theme interface.
 */
function useTheme() {
  return React.useContext(ThemeContext);
}

export { useTheme };
