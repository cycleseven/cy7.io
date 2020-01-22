import PropTypes from "prop-types";
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { trimCodeSnippet } from "@cy7/blog";

function CodeBlock({ code, language }) {
  const trimmedCode = trimCodeSnippet(code);

  return (
    <Highlight {...defaultProps} code={trimmedCode} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={`language-${language}`}>
            <code className={`language-${language}`}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                delete lineProps.style;

                return (
                  <div {...lineProps}>
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });
                      delete tokenProps.style;

                      return <span {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.oneOf(["js"]).isRequired
};

export { CodeBlock };
