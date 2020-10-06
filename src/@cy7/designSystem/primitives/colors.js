import { hslAdjust } from "@cy7/css";

const colors = {
  angrypeach: "hsl(2, 100%, 75%)",
  candyfloss: "hsl(308, 98%, 84%)",
  paper: "hsl(35, 100%, 99%)",
  obsidian: "hsl(213, 64%, 14%)",
  glasgow: "hsl(213, 90%, 28%)"
};

const palettes = {
  paper: {
    background: colors.paper,
    header: hslAdjust(colors.glasgow, { lightness: 0.14 }),
    body: hslAdjust(colors.glasgow, { lightness: 0.2, saturation: 0.7 })
  }
};

export { colors, palettes };
