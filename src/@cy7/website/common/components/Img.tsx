import { styled, theme } from "@cy7/design-system";
import React from "react";
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";

type ImgProps = GatsbyImageProps & React.ComponentPropsWithoutRef<"img">;

const StyledImage = styled(GatsbyImage, {
  "[data-main-image]": {
    opacity: 1,
    transition: "none",
  },
});

/**
 * Wrapped version of gatsby-image's <Img /> component that applies
 * placeholders with a consistent style.
 */
function Img(props: ImgProps): React.ReactElement {
  return <StyledImage backgroundColor={theme.colors.accent.value} {...props} />;
}

export type { ImgProps };
export { Img };
