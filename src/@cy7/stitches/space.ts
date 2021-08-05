import typography from "@cy7/typography";

const scale = {
  "0": 0,
  "0-1": 0.1,
  "0-15": 0.15,
  "0-2": 0.2,
  "0-25": 0.25,
  "0-33": 0.33,
  "0-5": 0.5,
  "0-75": 0.75,
  "1": 1,
  "1-5": 1.5,
  "2": 2,
  "3": 3,
  "4": 4,
  "6": 6,
  "8": 8,
  "10": 10,
  "15": 15,
  "20": 20,
  "30": 30,
} as const;

type ScaleKey = keyof typeof scale;

const space = Object.entries(scale).reduce((prev, [ident, size]) => {
  return {
    ...prev,
    [ident]: typography.rhythm(size),
  };
}, {}) as { [n in ScaleKey]: string };

export { space };
