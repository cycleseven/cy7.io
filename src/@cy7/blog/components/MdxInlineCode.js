import styled from "styled-components";
import { color } from "@cy7/designSystem";

const MdxInlineCode = styled.code`
  background-color: ${props => props.theme.colors.obsidian};
  border-radius: ${props => props.theme.scales.borderRadius()};
  color: ${color("candyflossLite")};
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 0.8em;
  padding: 3px 6px;
  white-space: nowrap;
`;

export { MdxInlineCode };
