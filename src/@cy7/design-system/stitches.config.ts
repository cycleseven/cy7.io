import {
  angrypeach,
  candyfloss,
  dijon,
  obsidian,
  paper,
} from "@cy7/design-system/theme/hues";
import { space } from "@cy7/design-system/theme/space";
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
      candyfloss: `hsl(${candyfloss}, 98%, 89%)`,
      dijon: `hsl(${dijon}, 100%, 50%)`,
      obsidian: `hsl(${obsidian}, 75%, 9%)`,
      glasgow: `hsl(${obsidian}, 95%, 16%)`,
      paper: `hsl(${paper}, 100%, 99%)`,
      parchment: `hsl(${paper}, 88%, 95%)`,

      // Shades
      // TODO: 'parchment' is a shade of 'paper', and 'glasgow' is a shade
      //       of 'obsidian'. Come up with a more consistent approach to
      //       defining shades.
      candyflossLite: `hsl(${candyfloss}, 100%, 88%)`,

      // Semantic aliases
      accent: "$candyfloss",
      bg: "$paper",
      altBg: "$parchment",
      contrastBg: "$obsidian",
      contrastText: "$paper",
      contrast: "$glasgow",

      // Components
      blockquoteBg: `$altBg`,
      bodyText: `hsl(${obsidian}, 85%, 17%)`,
      codeComment: `hsl(${obsidian}, 20%, 60%)`,
      codeError: "$angrypeach",
      codeKeyword: `hsl(${candyfloss}, 100%, 85%)`,
      codeInlineBg: `$altBg`,
      codeInlineBorder: `hsl(${paper}, 84%, 91%)`,
      codeLiteral: `hsl(${paper}, 90%, 70%)`,
      codeName: `hsl(${paper}, 100%, 84%)`,
      codeOperator: `hsl(${obsidian}, 50%, 80%)`,
      codePlain: "$contrastText",
      codePunctuation: `hsl(${obsidian}, 18%, 55%)`,
      dateText: `hsl(${obsidian}, 30%, 46%)`,
      headerBorder: `hsl(${obsidian}, 85%, 20%)`,
      headerText: `hsl(${obsidian}, 85%, 17%)`,
      linkBorder: `hsl(${candyfloss}, 92%, 92%)`,
      linkBorderHover: "$candyfloss",
      linkText: "$bodyText",
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

    paddingY(value: PropertyValue<"padding">) {
      return {
        paddingBottom: value,
        paddingTop: value,
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
    bg: "$obsidian",
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
