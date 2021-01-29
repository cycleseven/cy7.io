// TODO: why does this import not work when done straight from @cy7/designSystem
import { color } from "@cy7/designSystem/themeShortcuts";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BaseLink = styled.a`
  text-decoration: none;

  &:-webkit-any-link:focus {
    outline-offset: 0;
  }

  &:focus {
    background: ${color("linkFocusBg")};
    color: ${color("linkFocusText")};
  }
`;

const DefaultLink = styled(BaseLink)`
  box-shadow: inset 0 -0.04em ${color("bg")},
    inset 0 -0.4em ${color("linkBorder")};
  color: ${color("linkText")};
  font-weight: 700;

  &:hover:not(:focus) {
    box-shadow: inset 0 -0.04em ${color("bg")},
      inset 0 -0.4em ${color("linkBorderHover")};
    color: ${color("linkText")};
  }

  &:focus {
    border-bottom: ${({ theme }) =>
      theme.mode === "default" ? `solid 3px ${theme.palette.obsidian}` : null};
    box-shadow: none;
    outline: none;
  }
`;

const PlainLink = styled(BaseLink)`
  &:focus {
    outline: none;
  }
`;

const BorderlessLink = styled(BaseLink)`
  &:focus {
    outline: solid 4px ${color("linkFocusBg")};
  }
`;

function Link({ appearance, ...props }) {
  switch (appearance) {
    case "plain":
      return <PlainLink {...props} />;
    case "borderless":
      return <BorderlessLink {...props} />;
    default:
      return <DefaultLink {...props} />;
  }
}

Link.propTypes = {
  appearance: PropTypes.oneOf(["default", "plain", "borderless"]),
};

Link.defaultProps = {
  appearance: "default",
};

export { Link };
