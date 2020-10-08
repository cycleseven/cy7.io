import { lighten } from "polished";
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
    background-color: ${props => props.theme.colors.paper};
  }

  a {
    box-shadow:
      inset 0 0 ${props => props.theme.colors.paper},
      inset 0 -0.37em ${props => lighten(0.09, props.theme.colors.candyfloss)};
    color: hsl(227, 75%, 40%);
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    box-shadow:
      inset 0 0 ${props => props.theme.colors.paper},
      inset 0 -0.37em ${props => lighten(0.04, props.theme.colors.candyfloss)};
    color: hsl(227, 97%, 34%);
  }

  a:focus {
    background: ${props => props.theme.colors.dijon};
    border-bottom: solid 3px ${props => props.theme.colors.obsidian};
    box-shadow: none;
    color: ${props => props.theme.colors.obsidian};
    outline: none;
  }
`;

export { GlobalStyles };
