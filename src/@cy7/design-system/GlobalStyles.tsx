import { global } from "@cy7/stitches";
import inter400 from "./fonts/inter-400.woff2";
import inter400Italic from "./fonts/inter-400-italic.woff2";
import inter700 from "./fonts/inter-700.woff2";
import oswald700 from "./fonts/oswald-700.woff2";

/*
 * Global styles adapted and extended from Eric Meyer's reset stylesheet.
 *
 * (Parts of that particular reset stylesheet are duplicated by typography.js,
 * so this isn't a full copy.)
 *
 * See: http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain)
 */
const applyGlobalStyles = global({
  "@font-face": [
    {
      fontDisplay: "block",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      src: `local(""), url(${inter400}) format("woff2")`,
    },
    {
      fontDisplay: "block",
      fontFamily: "Inter",
      fontStyle: "italic",
      fontWeight: "400",
      src: `local(""), url(${inter400Italic}) format("woff2")`,
    },
    {
      fontDisplay: "block",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "700",
      src: `local(""), url(${inter700}) format("woff2")`,
    },
    {
      fontDisplay: "block",
      fontFamily: "Oswald",
      fontStyle: "normal",
      fontWeight: "700",
      src: `local(""), url(${oswald700}) format("woff2")`,
    },
  ],

  [`
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
    video
  `]: {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
  },

  table: {
    borderSpacing: 0,
  },

  html: {
    backgroundColor: "$bg",
  },
});

export { applyGlobalStyles };
