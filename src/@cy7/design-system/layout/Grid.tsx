import { styled } from "@cy7/stitches";

const Grid = styled("div", {
  // Provide a margin-based fallback for IE11
  "& > * + *": {
    marginTop: "$1-5",
  },

  "@supports (display: grid)": {
    display: "grid",
    gap: "$1-5",

    "& > * + *": {
      marginTop: 0,
    },
  },

  "@bp1": {
    gridGap: "$1 $2",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export default Grid;
