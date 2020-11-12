import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const BlockSvg = styled.svg`
  display: block;
`;

/**
 * SVGs are inline by default, but usually it's better to treat them as block
 *
 * - to avoid spurious margins
 *   (https://stackoverflow.com/questions/22337292/spurious-margin-on-svg-element)
 * - when using the SVG as the root element of a link (<a> tag), to make sure
 *   the click target area covers the entire image.
 *
 * This component also sets role="img" by default, which ensures screen readers
 * don't attempt to traverse inline SVG code.
 *
 * You can pass a title prop to set an image label for screen readers. If no
 * title is provided, the SVG is assumed to be purely decorative and aria-hidden
 * is set instead.
 */
function Svg({ title, children, ...props }) {
  return (
    <BlockSvg aria-hidden={!title ? true : null} {...props}>
      {title && <title>{title}</title>}
      {children}
    </BlockSvg>
  );
}

Svg.propTypes = {
  children: PropTypes.node.isRequired,

  // It's OK not to provide <title> tag for decorative images
  title: PropTypes.string
};

Svg.defaultProps = {
  title: null
};

export { Svg };
