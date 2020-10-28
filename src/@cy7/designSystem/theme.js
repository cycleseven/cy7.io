import { colors } from "@cy7/designSystem/primitives/colors";
import * as scales from "./primitives/scales";
import { typography } from "./primitives/typography";
import { hslAdjust } from "@cy7/css";

const theme = {
  breakpoints: ["900px"],
  colors,
  links: {
    borderColor: hslAdjust(colors.candyfloss, { lightness: 0.92 }),
    borderHoverColor: colors.candyfloss,
    color: "inherit"
  },
  maxWidths: {
    bestForText: "37rem",
    regular: "56rem"
  },
  scales,
  typography
};

// https://styled-system.com/theme-specification#media-queries
theme.mediaQueries = {
  desktop: `@media screen and (min-width: ${theme.breakpoints[0]})`
};

export default theme;
