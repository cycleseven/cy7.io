import { colors, palettes } from "@cy7/designSystem/primitives/colors";
import * as scales from "./primitives/scales";
import { typography } from "./primitives/typography";

const theme = {
  breakpoints: ["900px"],
  colors,
  palettes,
  scales,
  typography
};

// https://styled-system.com/theme-specification#media-queries
theme.mediaQueries = {
  desktop: `@media screen and (min-width: ${theme.breakpoints[0]})`
};

export default theme;
