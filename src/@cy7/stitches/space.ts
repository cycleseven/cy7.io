import { typography } from "@cy7/stitches/typography";

const scale = [
  0,
  0.15,
  0.25,
  0.33,
  0.5,
  0.75,
  1,
  1.5,
  2,
  3,
  4,
  6,
  8,
  10,
  15,
  20,
  30,
] as const;

type ScaleKey = typeof scale[number];

const space = scale.reduce(
  (prev, size) => ({
    ...prev,
    [size]: typography.rhythm(size),
  }),
  {}
) as { [n in ScaleKey]: string };

export { space };
