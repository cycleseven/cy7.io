import theme from "@cy7/designSystem/theme";
import { hslAdjust } from "@cy7/css";

const darkTheme = {
  ...theme,
  mode: "dark",
  colors: {
    bg: hslAdjust(theme.palette.obsidian, {
      saturation: 0.5,
      lightness: 0.12
    }),
    bodyText: "white",
    headerText: "white",
    linkBorder: hslAdjust(theme.palette.obsidian, {
      saturation: 0.4,
      lightness: 0.25
    }),
    linkBorderHover: hslAdjust(theme.palette.obsidian, {
      saturation: 0.4,
      lightness: 0.38
    }),
    linkText: hslAdjust(theme.palette.obsidian, { lightness: 0.92 }),
    linkFocusBg: theme.palette.dijon,
    linkFocusText: "inherit"
  }
};

const warningTheme = {
  ...theme,
  mode: "warning",
  colors: {
    bg: theme.palette.dijon,
    bodyText: theme.palette.glasgow,
    headerText: theme.palette.glasgow,
    linkBorder: hslAdjust(theme.palette.glasgow, { lightness: 0.8 }),
    linkBorderHover: hslAdjust(theme.palette.glasgow, { lightness: 0.75 }),
    linkText: theme.palette.glasgow,
    linkFocusBg: theme.palette.dijon,
    linkFocusText: theme.palette.obsidian
  }
};

export { darkTheme, warningTheme };
