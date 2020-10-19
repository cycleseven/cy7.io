/**
 * These functions provide shortcuts to accessing theme values from
 * styled-components interpolations.
 *
 * eg. instead of:
 *
 * ```
 * const Foo = styled.div`
 *   margin: ${({ theme }) => theme.typography.rhythm(2)};
 * `;
 * ```
 *
 * you can do
 *
 * ```
 * import { rhythm } from "@cy7/designSystem";
 *
 * const Foo = styled.div`
 *   margin: ${rhythm(2)}
 * `;
 * ```
 *
 * For more complex use cases, eg. combining with component props,
 * you can still fall back to the normal Styled Components way of
 * accessing theme values, eg.
 *
 * const Foo = styled.div`
 *   color: ${({ type, theme }) => outputType === "error"
      ? props.theme.colors.angrypeach
      : props.theme.colors.candyfloss};
 * `;
 */

function borderRadius(multiplier) {
  return function getBorderRadius({ theme }) {
    return theme.scales.borderRadius(multiplier);
  };
}

function color(colorName) {
  return function getColor({ theme }) {
    return theme.colors[colorName];
  };
}

function fontStack(bodyOrHeader) {
  return function getFontStack({ theme }) {
    // TODO: a bit hacky. Maybe it's better to define typography constants
    //       directly in the theme, then feed those into typography.js, so
    //       there's easier access to font stacks, base typography scale
    //       constants, etc.
    const fontStackKey = `${bodyOrHeader}FontFamily`;
    return theme.typography[fontStackKey];
  };
}

function paletteColor(paletteName, colorName) {
  return function getPaletteColor({ theme }) {
    return theme.palettes[paletteName][colorName];
  };
}

function rhythm(n) {
  return function getRhythm({ theme }) {
    return theme.typography.rhythm(n);
  };
}

function size(sizeName) {
  return function getSize({ theme }) {
    return theme.sizes[sizeName];
  };
}

export { borderRadius, color, fontStack, paletteColor, rhythm, size };
