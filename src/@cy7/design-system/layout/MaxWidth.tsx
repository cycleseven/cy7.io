import { styled } from "@cy7/stitches";

const MaxWidth = styled("div", {
  marginX: "auto",

  variants: {
    width: {
      bestForText: {
        maxWidth: "$maxWidthBestForText",
      },
      regular: {
        maxWidth: "$maxWidthRegular",
      },
    },
  },

  defaultVariants: {
    width: "regular",
  },
});

export default MaxWidth;
