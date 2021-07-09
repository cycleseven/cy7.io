import { space } from "@cy7/stitches/space";
import { createCss } from "@stitches/react";
import { hslAdjust } from "@cy7/css";

const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    borderWidths: {
      linkFocus: "3px",
    },
    colors: {
      // Base tones
      candyfloss: "hsl(320, 85%, 87%)",
      dijon: "hsl(51, 100%, 50%)",
      obsidian: "hsl(213, 64%, 14%)",
      glasgow: "hsl(213, 89%, 20%)",
      paper: "hsl(35, 100%, 99%)",

      // Semantic colors and aliases
      bg: "$paper",
      bodyText: "$glasgow",
      headerText: "$glasgow",
      linkBorder: "hsl(320, 85%, 92%)",
      linkBorderHover: "$candyfloss",
      linkText: "inherit",
      linkFocusBg: "$dijon",
      linkFocusBorder: "$obsidian",
      linkFocusText: "inherit",
    },
    sizes: {
      maxWidthBestForText: "37rem",
      maxWidthRegular: "56rem",
    },
    space,
  },
  media: {
    bp1: "(min-width: 900px)",
  },
  utils: {
    marginX(config) {
      return function resolveMarginX(
        value: `$${keyof typeof config["theme"]["space"]}` | (string & {})
      ) {
        return {
          marginLeft: value,
          marginRight: value,
        };
      };
    },

    marginY(config) {
      return function resolveMarginY(
        value: `$${keyof typeof config["theme"]["space"]}` | (string & {})
      ) {
        return {
          marginBottom: value,
          marginTop: value,
        };
      };
    },

    paddingX(config) {
      return function resolvePaddingX(
        value: `$${keyof typeof config["theme"]["space"]}` | (string & {})
      ) {
        return {
          paddingLeft: value,
          paddingRight: value,
        };
      };
    },
  },
});

const darkSection = theme({
  colors: {
    bg: hslAdjust(theme.colors.obsidian.value, {
      saturation: 0.5,
      lightness: 0.12,
    }),
    bodyText: "white",
    linkBorder: hslAdjust(theme.colors.obsidian.value, {
      saturation: 0.4,
      lightness: 0.25,
    }),
    linkBorderHover: hslAdjust(theme.colors.obsidian.value, {
      saturation: 0.4,
      lightness: 0.38,
    }),
    linkText: hslAdjust(theme.colors.obsidian.value, { lightness: 0.92 }),
  },
});

const warningSection = theme({
  colors: {
    bg: "$dijon",
    bodyText: "$glasgow",
    headerText: "$glasgow",
    linkBorder: hslAdjust(theme.colors.glasgow.value, {
      lightness: 0.8,
    }),
    linkBorderHover: hslAdjust(theme.colors.glasgow.value, {
      lightness: 0.75,
    }),
    linkText: "$glasgow",
    linkFocusBg: "white",
    linkFocusText: "$obsidian",
  },
});

export {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
  darkSection,
  warningSection,
};
