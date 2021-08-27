import Code from "@cy7/website/blog/components/codeBlock/Code";
import Pre from "@cy7/website/blog/components/codeBlock/Pre";
import Token from "@cy7/website/blog/components/codeBlock/Token";
import { SupportedCodeBlockLanguages } from "@cy7/website/blog/types";
import React from "react";
import Highlight, { Prism } from "prism-react-renderer";

interface CodeBlockContentProps {
  code: string;
  language?: SupportedCodeBlockLanguages | null;
}

function HighlightedCode({
  code,
  language = null,
}: CodeBlockContentProps): React.ReactElement | null {
  if (language === null) {
    return (
      <Pre>
        <Code>{code}</Code>
      </Pre>
    );
  }

  return (
    <Highlight code={code} language={language} Prism={Prism}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre>
          <Code>
            {tokens.map((line, i) => {
              const { key: lineKey } = getLineProps({ line, key: i });

              return (
                <div key={lineKey}>
                  {line.map((token, j) => {
                    const { children, key: tokenKey } = getTokenProps({
                      token,
                      key: j,
                    });

                    return (
                      <Token key={tokenKey} token={token}>
                        {children}
                      </Token>
                    );
                  })}
                </div>
              );
            })}
          </Code>
        </Pre>
      )}
    </Highlight>
  );
}

export default HighlightedCode;
