import { createGlobalStyle } from "styled-components";

const Cy7PrismStyles = createGlobalStyle`
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1rem 0.3rem;
    border-radius: .3em;
    white-space: normal;
  }
`;

export { Cy7PrismStyles };
