import Code from "@cy7/website/blog/components/codeBlock/Code";
import Pre from "@cy7/website/blog/components/codeBlock/Pre";
import Token from "@cy7/website/blog/components/codeBlock/Token";
import { SupportedCodeBlockLanguages } from "@cy7/website/blog/types";
import React from "react";
import { Highlight } from "prism-react-renderer";

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
    <Highlight code={code} language={language}>
      {({ tokens, getTokenProps }) => (
        <Pre>
          <Code>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i}>
                {line.map((token, key) => {
                  const { children } = getTokenProps({
                    token,
                    key,
                  });

                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <Token key={key} token={token}>
                      {children}
                    </Token>
                  );
                })}
              </div>
            ))}
          </Code>
        </Pre>
      )}
    </Highlight>
  );
}

export default HighlightedCode;
