import Typography from "typography";
import { colours } from "./colours";

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.55,
  bodyColor: colours.onyx,
  bodyFontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  bodyWeight: 400,
  headerColor: colours.obsidian,
  headerFontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  headerWeight: 700,
  scaleRatio: 2.2,
  overrideStyles: () => ({
    h1: {
      letterSpacing: "-0.01em"
    }
  })
});

typography.getHeaderFontFamily = () => {
  return typography.options.headerFontFamily.join(", ");
};

export { typography };
