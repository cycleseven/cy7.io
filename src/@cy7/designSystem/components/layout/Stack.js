import PropTypes from "prop-types";
import styled from "styled-components";

const Stack = styled.div`
  display: grid;
  gap: ${({ theme, space }) => theme.typography.rhythm(space)};
`;

Stack.propTypes = {
  space: PropTypes.number
};

Stack.defaultProps = {
  space: 1
};

export { Stack };
