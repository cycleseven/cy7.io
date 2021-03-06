import { styled } from "@cy7/design-system";
import Pre from "@cy7/website/blog/components/codeBlock/Pre";

const OutputPre = styled(Pre, {
  padding: "$0-25 0 0 0",

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

export default OutputPre;
