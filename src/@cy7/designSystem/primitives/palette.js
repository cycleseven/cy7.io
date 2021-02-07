import { hslAdjust } from "@cy7/css";

const basePalette = {
  angrypeach: "hsl(2, 100%, 80%)",
  candyfloss: "hsl(320, 85%, 87%)",
  paper: "hsl(35, 100%, 99%)",
  obsidian: "hsl(213, 64%, 14%)",
  glasgow: "hsl(213, 89%, 20%)",
  dijon: "hsl(51, 100%, 50%)",
};

const shades = {
  candyflossXX: hslAdjust(basePalette.candyfloss, {
    saturation: 1,
    lightness: 0.85,
  }),
  candyflossLite: hslAdjust(basePalette.candyfloss, {
    lightness: 0.88,
    saturation: 1,
  }),
};

const palette = {
  ...basePalette,
  ...shades,
};

export { palette };
