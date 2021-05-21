import { styled } from "@cy7/stitches";
import { typography } from "@cy7/designSystem/primitives/typography";

const scale = [0, 0.25, 0.33, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 10, 15, 20, 30];
const spaceVariants = scale.reduce(
  (prev, size) => ({
    ...prev,
    [size]: { "& > * + *": { marginTop: typography.rhythm(size) } },
  }),
  {}
);

const Stack = styled("div", {
  variants: {
    space: spaceVariants,
  },
});

export default Stack;
