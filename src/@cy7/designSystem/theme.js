import { palette } from "@cy7/designSystem/primitives/palette";
import * as scales from "./primitives/scales";
import { typography } from "./primitives/typography";
import { hslAdjust } from "@cy7/css";

const theme = {
  mode: "default",
  breakpoints: ["900px"],
  colors: {
    accent: palette.candyflossXX,
    bg: palette.paper,
    bodyText: palette.glasgow,
    contrast: palette.obsidian,
    headerText: palette.glasgow,
    linkBorder: hslAdjust(palette.candyfloss, { lightness: 0.92 }),
    linkBorderHover: palette.candyfloss,
    linkText: "inherit",
    linkFocusBg: palette.dijon,
    linkFocusBorder: palette.obsidian,
    linkFocusText: "inherit",
  },
  palette,
  maxWidths: {
    bestForText: "37rem",
    regular: "56rem",
  },
  scales,
  typography,
};

// https://styled-system.com/theme-specification#media-queries
theme.mediaQueries = {
  desktop: `@media screen and (min-width: ${theme.breakpoints[0]})`,
};

export default theme;
