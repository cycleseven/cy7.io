import Typography from "typography";
import { colours } from "./colours";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.55,
  bodyColor: colours.onyx,
  bodyFontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  bodyWeight: 400,
  headerColor: colours.obsidian,
  headerFontFamily: [
    "Montserrat",
    "Avenir Next",
    "Avenir",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  headerWeight: 700,
  scaleRatio: 2.2
});

typography.getHeaderFontFamily = () => {
  return typography.options.headerFontFamily.join(", ");
};

export { typography };
