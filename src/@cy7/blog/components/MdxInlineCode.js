import styled from "styled-components";

const MdxInlineCode = styled.code`
  background-color: ${props => props.theme.colors.obsidian};
  border-radius: ${props => props.theme.scales.borderRadius()};
  color: ${props => props.theme.colors.candyfloss};
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: ${props => props.theme.typography.scale(-0.25).fontSize};
  padding: 3px 6px;
  white-space: nowrap;
`;

export { MdxInlineCode };
