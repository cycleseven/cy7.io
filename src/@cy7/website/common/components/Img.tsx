import { styled } from "@cy7/design-system";
import React from "react";
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";

type ImgProps = GatsbyImageProps & React.ComponentPropsWithoutRef<"img">;

// TODO: these styles are generally very cheeky and peek inside
//       Gatsby Image implementation details.
//
//       But I didn't yet find a way to achieve the exact placeholder style
//       I'm after via props.
//
//       The old gatsby-image used to expose a `fadeIn` prop to disable the
//       transition between placeholder + actual image, the new
//       gatsby-plugin-image doesn't seem to have that.
//       https://github.com/gatsbyjs/gatsby/discussions/30699
const StyledImage = styled(GatsbyImage, {
  "& [data-placeholder-image]": {
    transition: "none !important",
  },
  "& [data-main-image]": {
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
  return <StyledImage {...props} />;
}

export type { ImgProps };
export default Img;
