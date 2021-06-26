import { space } from "@cy7/stitches/space";
import { createCss } from "@stitches/react";

const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    space,
  }
});

export { styled, css, global, keyframes, getCssString, theme };
