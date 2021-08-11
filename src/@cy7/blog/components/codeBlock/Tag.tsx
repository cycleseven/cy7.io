import { styled } from "@cy7/stitches";

const Tag = styled("div", {
  fontSize: "0.45rem",
  fontWeight: "$bold",
  letterSpacing: "0.13em",
  textTransform: "uppercase",
  userSelect: "none",

  defaultVariants: {
    color: "regular"
  },

  variants: {
    color: {
      error: {
        color: "$codeError"
      },
      regular: {
        color: "$codeKeyword"
      }
    }
  }
});

export default Tag;
