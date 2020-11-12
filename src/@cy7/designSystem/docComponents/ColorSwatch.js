import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const swatchSize = 50;

const ColorPreview = styled.div`
  background-color: ${props => props.color};
  box-shadow: 4px 4px 0 0 black;
  border: solid 4px black;
  height: ${swatchSize}px;
  width: ${swatchSize}px;
`;

const Caption = styled.figcaption``;

const Figure = styled.figure`
  align-items: center;
  display: flex;

  & > ${Caption} {
    margin-left: 20px;
  }
`;

const ColorName = styled.p`
  font-weight: 700;
  margin-bottom: 0;
`;

const ColorString = styled.code`
  margin-bottom: 0;
`;

const SwatchGroup = styled.div`
  & > ${Figure} + ${Figure} {
    margin: 20px 0 0 0;
  }
`;

function ColorSwatch({ color, name }) {
  return (
    <Figure>
      <ColorPreview color={color} />
      <Caption>
        <ColorName>theme.colors.{name}</ColorName>
        <ColorString>{color}</ColorString>
      </Caption>
    </Figure>
  );
}

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export { ColorSwatch, SwatchGroup };
