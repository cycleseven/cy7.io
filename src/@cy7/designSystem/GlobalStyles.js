import { createGlobalStyle } from "styled-components";
import { typography } from "./primitives/typography";

const GlobalStyles = createGlobalStyle`
  /*
   * Reset styles from Eric Meyer's reset stylesheet. Parts of the original are
   * duplicated by typography.js, so this isn't a full copy.
   *
   * http://meyerweb.com/eric/tools/css/reset/
   * v2.0 | 20110126
   * License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  a,
  abbr,
  acronym,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  label,
  legend,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figcaption,
  footer,
  header,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  table {
    border-spacing: 0;
  }

  /**
   * Styles from typography.js, including more resets etc
   */
  ${typography.toString()}

  /**
   * Other global styles
   */
  html {
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export { GlobalStyles };
