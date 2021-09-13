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
 * Wrapped version of `<GatsbyImage />` that defines how placeholders look
 * during the loading phase.
 *
 * Use this instead of using `<GatsbyImage />` directly for better visual
 * consistency across images in the site.
 */
function Img(props: ImgProps): React.ReactElement {
  return <StyledImage backgroundColor={theme.colors.accent.value} {...props} />;
}

export type { ImgProps };
export default Img;
