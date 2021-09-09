import { styled } from "@cy7/design-system";
import React from "react";

const swatchSize = 50;

const ColorPreview = styled("div", {
  boxShadow: "4px 4px 0 0 black",
  border: "solid 4px black",
  size: swatchSize,
});

const Caption = styled("figcaption");

const Figure = styled("figure", {
  alignItems: "center",
  display: "flex",

  [`& > ${Caption}`]: {
    marginLeft: "$1",
  },
});

const ColorName = styled("p", {
  fontWeight: "$bold",
  marginBottom: 0,
});

const ColorString = styled("code", {
  marginBottom: 0,
});

const SwatchGroup = styled("div", {
  [`& > ${Figure} + ${Figure}`]: {
    margin: "$1 0 0 0",
  },
});

interface ColorSwatchProps {
  color: string;
  name: string;
}

function ColorSwatch({ color, name }: ColorSwatchProps): React.ReactElement {
  return (
    <Figure>
      <ColorPreview css={{ background: color }} />
      <Caption>
        <ColorName>{name}</ColorName>
        <ColorString>{color}</ColorString>
      </Caption>
    </Figure>
  );
}

export { ColorSwatch, SwatchGroup };
