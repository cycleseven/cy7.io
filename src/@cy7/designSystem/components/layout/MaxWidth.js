import css from "@styled-system/css";
import PropTypes from "prop-types";
import styled from "styled-components";

function getWidth({ theme, width }) {
  return theme.maxWidths[width];
}

const MaxWidth = styled.div.withConfig({
  shouldForwardProp(prop, defaultValidatorFn) {
    return prop !== "width" && defaultValidatorFn(prop);
  }
})`
  max-width: ${getWidth};

  ${css({
    marginX: "auto"
  })}
`;

MaxWidth.propTypes = {
  width: PropTypes.oneOf(["regular", "bestForText"])
};

MaxWidth.defaultProps = {
  width: "regular"
};

export { MaxWidth };
