import { styled, darkSection } from "@cy7/stitches";

const Link = styled("a", {
  outlineOffset: 0,
  textDecoration: "none",

  "&:focus": {
    background: "$linkFocusBg",
    color: "$linkFocusText",
  },

  variants: {
    variant: {
      default: {
        $$borderWidth: "0.4em",
        $$borderOffset: "-0.04em",

        boxShadow: `
          inset 0 $$borderOffset $colors$bg,
          inset 0 -$$borderWidth $colors$linkBorder
        `,
        color: "$linkText",
        fontWeight: 700,

        "&:focus": {
          borderBottom: "solid 3px $obsidian",
          boxShadow: "none",
          outline: "none",
        },

        "&:hover:not(:focus)": {
          boxShadow: `
            inset 0 $$borderOffset $colors$bg,
            inset 0 -$$borderWidth $colors$linkBorderHover
          `,
          color: "$linkText",
        },

        [`.${darkSection} &`]: {
          fontWeight: "$regular",
        },

        [`.${darkSection} &:focus`]: {
          borderBottom: 0,
          outline: "solid 4px $colors$linkFocusBg",
        },
      },
      plain: {
        "&:focus": {
          outline: "none",
        },
      },
      borderless: {
        "&:focus": {
          outline: "solid 4px $colors$linkFocusBg",
        },
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export default Link;
