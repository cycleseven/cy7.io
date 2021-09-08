import React, { ComponentProps } from "react";
import { styled } from "@cy7/stitches";
import { VariantProps } from "@stitches/react";

const BlockSvg = styled("svg", {
  display: "block",
});

type SvgProps = {
  /**
   * Sets an image label for screen readers.
   *
   * If no title is provided, the SVG is assumed to be purely decorative, and
   * `aria-hidden` is set instead.
   */
  title?: string;
} & ComponentProps<typeof BlockSvg> &
  VariantProps<typeof BlockSvg>;

/**
 * SVGs are inline by default, but usually it's better to treat them as block
 *
 * - to avoid spurious margins
 *   (https://stackoverflow.com/questions/22337292/spurious-margin-on-svg-element)
 * - when using the SVG as the root element of a link (<a> tag), to make sure
 *   the click target area covers the entire image.
 *
 * This component also sets role="img" by default, which ensures screen readers
 * don't attempt to traverse inline SVG code.
 *
 * You can pass a title prop to set an image label for screen readers. If no
 * title is provided, the SVG is assumed to be purely decorative and aria-hidden
 * is set instead.
 */
function Svg({ title, children, ...props }: SvgProps): React.ReactElement {
  const hasTitle = typeof title === "string";

  return (
    <BlockSvg aria-hidden={!hasTitle ? true : undefined} {...props}>
      {hasTitle ? <title>{title}</title> : null}
      {children}
    </BlockSvg>
  );
}

export default Svg;
export type { SvgProps };
