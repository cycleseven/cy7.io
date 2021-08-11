import { theme } from "@cy7/design-system";
import React from "react";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";

export type ImgProps = GatsbyImageProps & React.ComponentPropsWithoutRef<"img">;

/**
 * Wrapped version of gatsby-image's <Img /> component that applies
 * placeholders with a consistent style.
 */
function Img(props: ImgProps): React.ReactElement {
  return (
    <GatsbyImage
      backgroundColor={theme.colors.accent}
      fadeIn={false}
      {...props}
    />
  );
}

export { Img };
