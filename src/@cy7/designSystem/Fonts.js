import { createGlobalStyle } from "styled-components";
import oswald700 from "./fonts/oswald-700.woff2";
import inter400 from "./fonts/inter-400.woff2";
import inter400Italic from "./fonts/inter-400-italic.woff2";
import inter700 from "./fonts/inter-700.woff2";

const Fonts = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: Oswald;
    font-style: normal;
    font-weight: 700;
    src: local(''), url(${oswald700}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    src: local(''), url(${inter400}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: Inter;
    font-style: italic;
    font-weight: 400;
    src: local(''), url(${inter400Italic}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    src: local(''), url(${inter700}) format('woff2');
  }
`;

export { Fonts };
