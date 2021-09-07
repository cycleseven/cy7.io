import {
  angrypeach,
  candyfloss,
  dijon,
  obsidian,
  paper,
} from "@cy7/stitches/hues";
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
      angrypeach: `hsl(${angrypeach}, 100%, 80%)`,
      candyfloss: `hsl(${candyfloss}, 85%, 87%)`,
      dijon: `hsl(${dijon}, 100%, 50%)`,
      obsidian: `hsl(${obsidian}, 64%, 6%)`,
      glasgow: `hsl(${obsidian}, 95%, 18%)`,
      paper: `hsl(${paper}, 100%, 99%)`,

      // Shades
      candyflossLite: `hsl(${candyfloss}, 100%, 88%)`,

      // Semantic colors and aliases
      accent: "$candyfloss",
      bg: "$paper",
      bodyText: "$glasgow",
      codeComment: `hsl(${obsidian}, 20%, 60%)`,
      codeError: "$angrypeach",
      codeKeyword: `hsl(${candyfloss}, 100%, 85%)`,
      codeLiteral: `hsl(${paper}, 90%, 70%)`,
      codeName: `hsl(${paper}, 100%, 84%)`,
      codeOperator: `hsl(${obsidian}, 50%, 80%)`,
      codePlain: "$paper",
      codePunctuation: `hsl(${obsidian}, 18%, 55%)`,
      contrast: "$obsidian",
      headerText: "$glasgow",
      linkBorder: `hsl(${candyfloss}, 85%, 94%)`,
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
    bg: `hsl(${obsidian}, 50%, 12%)`,
    bodyText: "white",
    linkBorder: `hsl(${obsidian}, 40%, 25%)`,
    linkBorderHover: `hsl(${obsidian}, 30%, 40%)`,
    linkText: `hsl(${obsidian}, 64%, 96%)`,
    linkHoverText: `hsl(${obsidian}, 64%, 96%)`,
  },
});

const warningSection = createTheme({
  colors: {
    bg: "$dijon",
    bodyText: "$glasgow",
    headerText: "$glasgow",
    linkBorder: `hsl(${dijon}, 100%, 46%)`,
    linkBorderHover: `hsl(${dijon}, 95%, 43%)`,
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
