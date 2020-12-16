import Typography from "typography";
import { palette } from "@cy7/designSystem/primitives/palette";

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.65,
  blockMarginBottom: 0.8,
  bodyColor: palette.glasgow,
  bodyFontFamily: [
    "Inter",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyWeight: 400,
  headerColor: palette.glasgow,
  headerFontFamily: ["Oswald", "Open Sans Condensed", "Impact", "sans-serif"],
  headerWeight: 700,
  scaleRatio: 2.5,
  overrideStyles: ({ rhythm }) => ({
    "h1,h2,h3": {
      textTransform: "uppercase"
    },
    h1: {
      letterSpacing: "-0.015em",
      marginBottom: rhythm(1.5)
    },
    h2: {
      marginBottom: rhythm(1),
      marginTop: rhythm(2)
    }
  })
});

typography.getHeaderFontFamily = () => {
  return typography.options.headerFontFamily.join(", ");
};

export { typography };