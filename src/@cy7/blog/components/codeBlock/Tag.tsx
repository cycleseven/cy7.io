import { styled } from "@cy7/stitches";

const Tag = styled("div", {
  fontSize: "0.45rem",
  fontWeight: "$bold",
  textTransform: "uppercase",
  userSelect: "none",

  // TODO: undo ts-ignore when Stitches types stabilise
  // @ts-ignore
  letterSpacing: "0.13em",

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
