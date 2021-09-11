import { CSS } from "@stitches/react";
import { styled, theme } from "@cy7/design-system/stitches.config";

type SpaceKey = keyof typeof theme.space;

const spaceVariants = Object.entries(theme.space).reduce(
  (prev, [key, value]) => ({
    ...prev,
    [key]: {
      "& > * + *": {
        marginTop: value,
      },
    },
  }),
  {}
) as { [n in SpaceKey]: CSS };

// TODO: "Expression produces a union type that is too complex to represent"
//       Remove ts-ignore when stitches fixes this for good
// @ts-ignore
const Stack = styled("div", {
  variants: {
    space: spaceVariants,
  },
  defaultVariants: {
    space: "1",
  },
});

export default Stack;
