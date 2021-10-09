import {
  getTokenColorVariant,
  getTokenWeightVariant,
} from "@cy7/website/blog/components/codeBlock/tokenVariants";
import { Token as TokenType } from "@cy7/website/blog/types";
import { VariantProps, styled } from "@cy7/design-system";
import React, { ComponentProps } from "react";

const StyledToken = styled("span", {
  display: "inline-block",

  defaultVariants: {
    color: "plain",
  },

  variants: {
    color: {
      comment: {
        color: "$codeComment",
      },
      keyword: {
        color: "$codeKeyword",
      },
      literal: {
        color: "$codeLiteral",
      },
      name: {
        color: "$codeName",
      },
      operator: {
        color: "$codeOperator",
      },
      plain: {
        color: "$codePlain",
      },
      punctuation: {
        color: "$codePunctuation",
      },
    },
    weight: {
      bold: {
        fontWeight: "$bold",
      },
      regular: {
        fontWeight: "$regular",
      },
    },
  },
});

type TokenVariants = VariantProps<typeof StyledToken>;

type TokenProps = {
  token: TokenType;
} & ComponentProps<typeof StyledToken>;

function Token({ token, ...props }: TokenProps): React.ReactElement {
  const color = getTokenColorVariant(token);
  const weight = getTokenWeightVariant(token);
  return <StyledToken color={color} weight={weight} {...props} />;
}

export default Token;

export type { TokenVariants };
