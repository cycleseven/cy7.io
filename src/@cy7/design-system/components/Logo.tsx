import { styled, Svg, SvgProps } from "@cy7/design-system";
import React from "react";

type LogoProps = {
  /**
   * Override the default size. Value is interpreted as `px`.
   */
  size?: number;
} & SvgProps;

const Path = styled("path", {
  fill: "$bodyText",
});

/**
 * Renders an inline SVG of the cy7.io logo.
 */
function Logo({ size = 48, ...props }: LogoProps): React.ReactElement {
  const originalWidth = 238;
  const originalHeight = 265;
  const scaledWidth = (size * originalWidth) / originalHeight;
  const viewBox = `0 0 ${originalWidth} ${originalHeight}`;

  return (
    <Svg height={size} viewBox={viewBox} width={scaledWidth} {...props}>
      <Path
        d="M58.461 0C24.615 0 0 22.98 0 54.54 0 86.56 24 110 57.077 110 73.692 110 92 101.574 104 88.551L83.385 66.643C76.308 74.151 66.615 78.9 58.923 78.9 46 78.9 36.615 68.482 36.615 54.08c0-14.247 9.385-24.512 22.308-24.512 8.308 0 18 5.669 24.462 14.401L104 19.61C92.923 7.66 74.923 0 58.461 0zM99 176.207V151H6v44.885h32.767v-15.938h19.275L20.938 265H60.29zM199.62 74.414L238 0h-35.322l-20.796 41.598L160.322 0H125l39.145 75.184V108h35.475zM177.907 227C166.785 227 159 234.785 159 245.907c0 11.308 7.785 19.093 18.907 19.093 11.308 0 19.093-7.785 19.093-19.093 0-11.122-7.785-18.907-19.093-18.907z"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default Logo;
