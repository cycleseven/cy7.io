import React from "react";
import { useTheme } from "@cy7/designSystem";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";

export type ImgProps = GatsbyImageProps & React.ComponentPropsWithoutRef<"img">;

/**
 * Wrapped version of gatsby-image's <Img /> component that applies
 * placeholders with a consistent style.
 */
function Img(props: ImgProps): React.ReactElement {
  const theme = useTheme();
  return (
    <GatsbyImage
      backgroundColor={theme.colors.accent}
      fadeIn={false}
      {...props}
    />
  );
}

export { Img };
