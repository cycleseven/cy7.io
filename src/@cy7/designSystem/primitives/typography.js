import Typography from "typography";
import { palettes } from "./colours";

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.55,
  bodyColor: palettes.paper.body,
  bodyFontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  bodyWeight: 400,
  headerColor: palettes.paper.header,
  headerFontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  headerWeight: 700,
  scaleRatio: 2.5,
  overrideStyles: () => ({
    h1: {
      letterSpacing: "-0.015em"
    }
  })
});

typography.getHeaderFontFamily = () => {
  return typography.options.headerFontFamily.join(", ");
};

export { typography };
