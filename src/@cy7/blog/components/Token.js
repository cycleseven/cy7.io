import styled from "styled-components";
import { hslAdjust } from "@cy7/css";
import { arraysHaveIntersect } from "@cy7/utils/array";

function getTokenColor(token, theme) {
  if (arraysHaveIntersect(token.types, ["keyword"])) {
    return theme.colors.candyfloss;
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
    return hslAdjust(theme.colors.paper, { lightness: 0.7, saturation: 0.9 });
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
    return hslAdjust(theme.colors.paper, { lightness: 0.84, saturation: 1 });
  } else if (arraysHaveIntersect(token.types, ["comment", "doctype"])) {
    return hslAdjust(theme.colors.obsidian, {
      lightness: 0.6,
      saturation: 0.2
    });
  } else if (arraysHaveIntersect(token.types, ["operator"])) {
    return hslAdjust(theme.colors.obsidian, {
      lightness: 0.8,
      saturation: 0.5
    });
  } else if (arraysHaveIntersect(token.types, ["punctuation"])) {
    return hslAdjust(theme.colors.obsidian, {
      lightness: 0.55,
      saturation: 0.18
    });
  } else if (arraysHaveIntersect(token.types, ["plain"])) {
    return theme.colors.candyfloss;
  }

  return null;
}

function getTokenDisplay(token) {
  if (token.empty) {
    return "inline-block";
  }

  return null;
}

function getTokenWeight(token) {
  if (arraysHaveIntersect(token.types, ["important", "bold"])) {
    return 700;
  }

  return null;
}

const Token = styled.span.attrs(({ token }) => {
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
  display: ${({ token }) => getTokenDisplay(token)};
  font-weight: ${({ token }) => getTokenWeight(token)};
`;

export { Token };
