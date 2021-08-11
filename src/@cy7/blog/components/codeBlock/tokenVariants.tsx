import { TokenVariants } from "@cy7/blog/components/codeBlock/Token";
import { Token } from "@cy7/blog/types";
import { arraysHaveIntersect } from "@cy7/utils/array";

function getTokenColorVariant(token: Token): TokenVariants["color"] {
  if (arraysHaveIntersect(token.types, ["keyword"])) {
    return "keyword";
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
      "important",
    ])
  ) {
    return "literal";
  } else if (
    arraysHaveIntersect(token.types, [
      "entity",
      "url",
      "variable",
      "atrule",
      "attr-value",
      "function",
      "class-name",
      "tag",
    ])
  ) {
    return "name";
  } else if (arraysHaveIntersect(token.types, ["comment", "doctype"])) {
    return "comment";
  } else if (arraysHaveIntersect(token.types, ["operator"])) {
    return "operator";
  } else if (arraysHaveIntersect(token.types, ["punctuation"])) {
    return "punctuation";
  }

  return "plain";
}

function getTokenWeightVariant(token: Token): TokenVariants["weight"] {
  if (arraysHaveIntersect(token.types, ["important", "bold"])) {
    return "bold";
  }

  return "regular";
}

export { getTokenColorVariant, getTokenWeightVariant };
