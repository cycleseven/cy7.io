import { styled } from "@cy7/design-system";

const MdxCode = styled("code", {
  backgroundColor: "$codeInlineBg",
  borderRadius: "$2",
  border: "solid 1px $codeInlineBorder",
  color: "$bodyText",
  fontFamily: "$code",
  fontSize: "0.8em",
  padding: "0.15em 0.33em",
  whiteSpace: "nowrap",

  "h1 &, h2 &, h3 &, h4 &, h5 &, h6 &": {
    position: "relative",
    top: "-0.09em",
  },
});

export default MdxCode;
