import Typography from "typography";
import { palettes } from "@cy7/designSystem/primitives/colors";

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.6,
  blockMarginBottom: 0.75,
  bodyColor: palettes.paper.body,
  bodyFontFamily: ["Inter"],
  bodyWeight: 400,
  headerColor: palettes.paper.header,
  headerFontFamily: ["Oswald"],
  headerWeight: 700,
  scaleRatio: 2.5,
  overrideStyles: ({ rhythm }) => ({
    "h1,h2": {
      textTransform: "uppercase"
    },
    h1: {
      letterSpacing: "-0.015em",
      marginBottom: rhythm(1.5)
    },
    h2: {
      marginBottom: rhythm(1.5),
      marginTop: rhythm(2)
    }
  })
});

typography.getHeaderFontFamily = () => {
  return typography.options.headerFontFamily.join(", ");
};

export { typography };
