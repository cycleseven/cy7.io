import React from "react";
import { useTheme } from "@cy7/designSystem";
import GatsbyImage from "gatsby-image";

/**
 * Wrapped version of gatsby-image's <Img /> component that applies
 * placeholders with a consistent style.
 */
function Img(props) {
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
