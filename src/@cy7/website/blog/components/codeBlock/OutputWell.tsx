import { styled } from "@cy7/stitches";

const OutputWell = styled("div", {
  borderRadius: "$2",
  border: "solid 2px",
  color: "$contrast",
  display: "inline-block",
  marginRight: "$1",
  minWidth: "100%",
  padding: "$0-5",

  defaultVariants: {
    color: "regular"
  },

  variants: {
    color: {
      error: {
        borderColor: "$codeError"
      },
      regular: {
        borderColor: "$codeKeyword"
      }
    }
  }
});

export default OutputWell;
