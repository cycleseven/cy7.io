import styled from "styled-components";
import { arraysHaveIntersect } from "@cy7/utils/array";

function getTokenColour(token, theme) {
  if (arraysHaveIntersect(token.types, ["keyword"])) {
    return theme.colours.candyfloss({ lightness: 80, saturation: 100 });
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
    return theme.colours.paper({ lightness: 70, saturation: 90 });
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
    return theme.colours.paper({ lightness: 86, saturation: 100 });
  } else if (arraysHaveIntersect(token.types, ["comment", "doctype"])) {
    return theme.colours.obsidian({ lightness: 50, saturation: 20 });
  } else if (arraysHaveIntersect(token.types, ["operator"])) {
    return theme.colours.obsidian({ lightness: 80, saturation: 50 });
  } else if (arraysHaveIntersect(token.types, ["punctuation"])) {
    return theme.colours.obsidian({ lightness: 55, saturation: 18 });
  } else if (arraysHaveIntersect(token.types, ["plain"])) {
    return "white";
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
  color: ${({ token, theme }) => getTokenColour(token, theme)};
  display: ${({ token }) => getTokenDisplay(token)};
  font-weight: ${({ token }) => getTokenWeight(token)};
`;

export { Token };
