import { styled } from "@cy7/design-system";

const MdxBlockquote = styled("blockquote", {
  $$shadowSize: "5px",

  background: "$blockquoteBg",
  borderLeft: "solid $$shadowSize $glasgow",
  borderRadius: "$2",
  fontSize: "0.95rem",
  margin: "$1 0",
  padding: "1.25rem",
});

export default MdxBlockquote;
