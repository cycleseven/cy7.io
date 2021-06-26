import { styled, theme } from "@cy7/stitches"

type SpaceKey = keyof typeof theme.space;

const spaceVariants = Object.entries(theme.space).reduce(
  (prev, [key, value]) => {
    return {
      ...prev,
      [key]: {
        "& > * + *": {
          marginTop: value,
        },
      },
    };
  },
  {}
) as { [n in SpaceKey]: any };

const Stack = styled("div", {
  variants: {
    space: spaceVariants,
  },
  defaultVariants: {
    space: "1",
  },
});

export default Stack;
