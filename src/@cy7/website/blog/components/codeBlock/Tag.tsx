import { styled } from "@cy7/design-system";

const Tag = styled("div", {
  fontSize: "0.45rem",
  fontWeight: "$bold",
  textTransform: "uppercase",
  userSelect: "none",
  letterSpacing: "0.13em",

  defaultVariants: {
    color: "regular",
  },

  variants: {
    color: {
      error: {
        color: "$codeError",
      },
      regular: {
        color: "$codeKeyword",
      },
    },
  },
});

export default Tag;
