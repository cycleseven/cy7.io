import theme from "@cy7/designSystem/theme";
import { hslAdjust } from "@cy7/css";

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    candyfloss: hslAdjust(theme.colors.obsidian, { lightness: 0.2 }),
    // dijon: hslAdjust(theme.colors.obsidian, { lightness: 0.5 }),
    paper: hslAdjust(theme.colors.obsidian, {
      saturation: 0.5,
      lightness: 0.12
    }),
    glasgow: "white"
  },
  links: {
    ...theme.links,
    borderColor: hslAdjust(theme.colors.obsidian, {
      saturation: 0.4,
      lightness: 0.25
    }),
    borderHoverColor: hslAdjust(theme.colors.obsidian, {
      saturation: 0.4,
      lightness: 0.38
    }),
    color: hslAdjust(theme.colors.obsidian, { lightness: 0.92 })
  }
};

export { darkTheme };
