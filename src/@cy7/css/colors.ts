type HslColor = string;
type HslAdjustments = {
  hue?: number;
  saturation?: number;
  lightness?: number;
};

/**
 * Return color as a { hue, saturation, lightness } object.
 */
function hslParse(hslColor: HslColor) {
  const [h, s, l] = hslColor
    .replace("hsl(", "") // Strip "hsl(" prefix
    .slice(0, -1) // Strip the final ")" too
    .replace(/\s/g, "") // Remove all whitespace
    .split(","); // Split by comma to pull out the remaining values

  return {
    // Hue is just a number
    hue: parseInt(h, 10),

    // Saturation and lightness are given as % in CSS, but
    // are stored as numbers between 0-1 in this representation.
    //
    // Use .slice(0, -1) as a (fairly hacky) method of stripping the %.
    //
    // (Actually, parseInt will throw away the % symbol anyway, but seems
    // confusing to depend on that...)
    saturation: parseInt(s.slice(0, -1), 10) * 0.01,
    lightness: parseInt(l.slice(0, -1), 10) * 0.01,
  };
}

/**
 * Adjust a color by modifying the HSL values directly.
 *
 * const output = hslAdjust("hsl(300, 24%, 50%)", { saturation: 0.5, lightness: 0.24 });
 * console.log(output);
 * // "hsl(300, 50%, 24%)"
 *
 * @param color         An HSL color string (eg. "hsl(300, 24%, 50%)")
 *
 * @param adjustments   An object with the shape { hue, saturation, lightness }.
 *                      Hue is an angle ie. 0-360, saturation and lightness are 0-1.
 *
 *                      It's only necessary to provide the { hue, saturation, lightness }
 *                      values that you want to adjust: the object can be partial.
 */
function hslAdjust(color: HslColor, adjustments: HslAdjustments) {
  const hslColor = hslParse(color);
  const adjustedColor = { ...hslColor, ...adjustments };

  const h = adjustedColor.hue;
  const s = `${adjustedColor.saturation * 100}%`;
  const l = `${adjustedColor.lightness * 100}%`;

  return `hsl(${h}, ${s}, ${l})`;
}

export { hslAdjust };
