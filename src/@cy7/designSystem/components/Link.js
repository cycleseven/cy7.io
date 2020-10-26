import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Link = styled.a.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["appearance"].includes(prop) && defaultValidatorFn(prop)
})`
  text-decoration: none;

  &:focus {
    background: ${({ theme }) => theme.colors.dijon};
    border-bottom: ${({ theme, appearance }) =>
      appearance === "default" ? `solid 3px ${theme.colors.obsidian}` : null};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.obsidian};
    outline: ${({ theme, appearance }) =>
      appearance === "image" ? `solid 4px ${theme.colors.dijon}` : "none"};
  }

  ${({ theme, appearance }) =>
    appearance === "default"
      ? css`
          box-shadow: inset 0 0 ${theme.colors.paper},
            inset 0 -0.3rem ${theme.links.borderColor};
          color: ${theme.links.color};
          font-weight: 700;

          &:hover:not(:focus) {
            box-shadow: inset 0 0 ${theme.colors.paper},
              inset 0 -0.3rem ${theme.links.borderHoverColor};
            color: ${theme.links.color};
          }
        `
      : null}
`;

Link.propTypes = {
  appearance: PropTypes.oneOf(["default", "plain", "image"])
};

Link.defaultProps = {
  appearance: "default"
};

export { Link };
