import { rhythm } from "@cy7/designSystem/themeShortcuts";
import styled from "styled-components";

const Grid = styled.div`
  // Provide a margin-based fallback for IE11
  & > * + * {
    margin-top: ${rhythm(1.5)};
  }

  @supports (display: grid) {
    display: grid;
    gap: ${rhythm(1.5)};

    & > * + * {
      margin-top: 0;
    }

    ${({ theme }) => theme.mediaQueries.desktop} {
      grid-gap: ${rhythm(1)} ${rhythm(2)};
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export { Grid };
