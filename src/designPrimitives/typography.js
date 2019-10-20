import Typography from "typography";
import { colours } from "./theme";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  bodyColor: colours.onyx,
  bodyFontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
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
  scaleRatio: 2.8
});

export { typography };
