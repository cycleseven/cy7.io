import { color, palette } from "@cy7/designSystem";
import styled from "styled-components";

const MdxInlineCode = styled.code`
  background-color: ${color("contrast")};
  border-radius: ${({ theme }) => theme.scales.borderRadius()};
  color: ${palette("candyflossLite")};
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 0.8em;
  padding: 3px 6px;
  white-space: nowrap;
`;

export { MdxInlineCode };
