import { color, palette } from "@cy7/designSystem";
import styled from "styled-components";
import { hslAdjust } from "@cy7/css";

const MdxInlineCode = styled.code`
  background-color: ${color("bodyText")};
  border-radius: ${({ theme }) => theme.scales.borderRadius()};
  color: ${color("bg")};
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 0.8em;
  padding: 3px 6px;
  white-space: nowrap;
`;

export { MdxInlineCode };
