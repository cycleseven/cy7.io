import { styled } from "@cy7/design-system/stitches.config";

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
