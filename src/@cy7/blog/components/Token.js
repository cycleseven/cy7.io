import { hslAdjust } from "@cy7/css";
import { arraysHaveIntersect } from "@cy7/utils/array";
import React from "react";
import styled from "styled-components";

function getTokenColor(token, theme) {
  if (arraysHaveIntersect(token.types, ["keyword"])) {
    return theme.palette.candyflossXX;
  } else if (
    arraysHaveIntersect(token.types, [
      "boolean",
      "number",
      "selector",
      "attr-name",
      "string",
      "char",
      "builtin",
      "inserted",
      "regex",
      "important"
    ])
  ) {
    return hslAdjust(theme.colors.bg, { lightness: 0.7, saturation: 0.9 });
  } else if (
    arraysHaveIntersect(token.types, [
      "entity",
      "url",
      "variable",
      "atrule",
      "attr-value",
      "function",
      "class-name",
      "tag"
    ])
  ) {
    return hslAdjust(theme.colors.bg, { lightness: 0.84, saturation: 1 });
  } else if (arraysHaveIntersect(token.types, ["comment", "doctype"])) {
    return hslAdjust(theme.colors.bodyText, {
      lightness: 0.6,
      saturation: 0.2
    });
  } else if (arraysHaveIntersect(token.types, ["operator"])) {
    return hslAdjust(theme.colors.bodyText, {
      lightness: 0.8,
      saturation: 0.5
    });
  } else if (arraysHaveIntersect(token.types, ["punctuation"])) {
    return hslAdjust(theme.colors.bodyText, {
      lightness: 0.55,
      saturation: 0.18
    });
  } else if (arraysHaveIntersect(token.types, ["plain"])) {
    return theme.colors.bg;
  }

  return null;
}

function getTokenWeight(token) {
  if (arraysHaveIntersect(token.types, ["important", "bold"])) {
    return 700;
  }

  return null;
}

const StyledToken = styled.span.attrs(({ token }) => {
  // The data-token-types HTML attribute helps devs inspect the token types
  // assigned by Prism
  if (process.env.NODE_ENV === "development") {
    return {
      "data-token-types": token.types.join(" ")
    };
  }

  // Shave a few bytes in prod by leaving out the debug data
  return null;
})`
  color: ${({ token, theme }) => getTokenColor(token, theme)};
  font-weight: ${({ token }) => getTokenWeight(token)};
`;

// The `token` prop is passed through from prismjs. Defining the prop shape
// is therefore a little like testing 3rd party code, so let's be lazy and skip
// it...
//
/* eslint-disable react/prop-types */
function Token({ token, ...props }) {
  // Render an actual newline character in the HTML when encountering an empty
  // token rather than creating visual space using CSS. This means users
  // can copy-paste code with empty lines preserved
  if (token.empty) {
    return "\n";
  }

  return <StyledToken token={token} {...props} />;
}
/* eslint-enable */

export { Token };
