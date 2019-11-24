import styled from "styled-components";

/**
 * SVGs are inline by default, but often it helps to treat them as block, eg.
 *
 * - to avoid spurious margins
 *   (https://stackoverflow.com/questions/22337292/spurious-margin-on-svg-element)
 * - when using the SVG as the root element of a link (<a> tag), to make sure
 *   the click target area covers the entire image.
 */
const BlockSvg = styled.svg`
  display: block;
`;

export { BlockSvg };
