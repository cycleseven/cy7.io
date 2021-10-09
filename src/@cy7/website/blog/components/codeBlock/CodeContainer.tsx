import { styled } from "@cy7/design-system";

const CodeContainer = styled("div", {
  $$shadowSize: "5px",

  backgroundColor: "$contrastBg",
  borderRadius: "$2",
  boxShadow: "$$shadowSize $$shadowSize 0 0 $colors$accent",
  margin: "$1 0 calc($1 + $$shadowSize) 0",
  overflow: "auto",
});

export default CodeContainer;
