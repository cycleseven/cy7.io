interface Token {
  types: string[];
}

type SupportedCodeBlockLanguages = "graphql" | "jsx" | "javascript";

export type { Token, SupportedCodeBlockLanguages };
