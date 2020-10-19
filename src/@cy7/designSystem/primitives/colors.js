import { hslAdjust } from "@cy7/css";

const baseColors = {
  angrypeach: "hsl(2, 100%, 75%)",
  candyfloss: "hsl(309, 84%, 87%)",
  paper: "hsl(35, 100%, 99%)",
  obsidian: "hsl(213, 64%, 14%)",
  glasgow: "hsl(214, 89%, 20%)",
  dijon: "hsl(51, 100%, 50%)"
};

const shades = {
  candyflossXX: hslAdjust(baseColors.candyfloss, {
    saturation: 1,
    lightness: 0.85
  }),
  candyflossLite: hslAdjust(baseColors.candyfloss, {
    lightness: 0.93,
    saturation: 0.4
  })
};

const colors = {
  ...baseColors,
  ...shades
};

const palettes = {
  paper: {
    background: colors.paper,
    header: hslAdjust(colors.glasgow),
    body: hslAdjust(colors.glasgow)
  }
};

export { colors, palettes };
