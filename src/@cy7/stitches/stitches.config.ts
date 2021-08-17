import { hslAdjust } from "@cy7/css";
import { space } from "@cy7/stitches/space";
import typography from "@cy7/typography";
import { VariantProps, createStitches, PropertyValue } from "@stitches/react";

const {
  styled,
  createTheme,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
} = createStitches({
  theme: {
    radii: {
      "2": "2px",
    },
    borderWidths: {
      linkFocus: "3px",
    },
    colors: {
      // Base tones
      angrypeach: "hsl(2, 100%, 80%)",
      candyfloss: "hsl(320, 85%, 87%)",
      dijon: "hsl(51, 100%, 50%)",
      obsidian: "hsl(213, 64%, 14%)",
      glasgow: "hsl(213, 89%, 20%)",
      paper: "hsl(35, 100%, 99%)",

      // Shades
      candyflossLite: "hsl(320, 100%, 88%)",

      // Semantic colors and aliases
      accent: "$candyfloss",
      bg: "$paper",
      bodyText: "$glasgow",
      codeComment: "hsl(213, 20%, 60%)",
      codeError: "$angrypeach",
      codeKeyword: "hsl(320, 100%, 85%)",
      codeLiteral: "hsl(35, 90%, 70%)",
      codeName: "hsl(35, 100%, 84%)",
      codeOperator: "hsl(213, 50%, 80%)",
      codePlain: "$paper",
      codePunctuation: "hsl(213, 18%, 55%)",
      contrast: "$obsidian",
      headerText: "$glasgow",
      linkBorder: "hsl(320, 85%, 94%)",
      linkBorderHover: "$candyfloss",
      linkText: "inherit",
      linkHoverText: "inherit",
      linkFocusBg: "$dijon",
      linkFocusBorder: "$obsidian",
      linkFocusText: "inherit",
    },
    fonts: {
      body: typography.options.bodyFontFamily.join(","),
      code: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      header: typography.options.headerFontFamily.join(","),
    },
    fontWeights: {
      regular: "400",
      bold: "700",
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
    marginX(value: PropertyValue<"margin">) {
      return {
        marginLeft: value,
        marginRight: value,
      };
    },

    marginY(value: PropertyValue<"margin">) {
      return {
        marginBottom: value,
        marginTop: value,
      };
    },

    paddingX(value: PropertyValue<"padding">) {
      return {
        paddingLeft: value,
        paddingRight: value,
      };
    },

    size(value: PropertyValue<"width">) {
      return {
        height: value,
        width: value,
      };
    },
  },
});

const darkSection = createTheme({
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
      saturation: 0.66,
      lightness: 0.4,
    }),
    linkText: hslAdjust(theme.colors.obsidian.value, { lightness: 0.96 }),
    linkHoverText: hslAdjust(theme.colors.obsidian.value, { lightness: 0.92 }),
  },
});

const warningSection = createTheme({
  colors: {
    bg: "$dijon",
    bodyText: "$glasgow",
    headerText: "$glasgow",
    linkBorder: hslAdjust(theme.colors.glasgow.value, {
      saturation: 0.15,
      lightness: 0.8,
    }),
    linkBorderHover: hslAdjust(theme.colors.glasgow.value, {
      lightness: 0.75,
    }),
    linkText: "$glasgow",
    linkHoverText: "$glasgow",
    linkFocusBg: "white",
    linkFocusText: "$obsidian",
  },
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  darkSection,
  warningSection,
};

export type { VariantProps };
