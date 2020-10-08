import styled from "styled-components";

const PlainLink = styled.a`
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }

  &:focus {
    border: 0;
    outline: solid 4px ${props => props.theme.colors.obsidian};
  }
`;

export { PlainLink };
