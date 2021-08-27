import { styled } from "@cy7/stitches";
import Pre from "@cy7/website/blog/components/codeBlock/Pre";

const OutputContainer = styled("div", {
  margin: "$0-5",

  [`${Pre} + &`]: {
    marginTop: "$0"
  }
});

export default OutputContainer;
