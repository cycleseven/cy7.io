import PropTypes from "prop-types";
import React from "react";
import Highlight, { Prism } from "prism-react-renderer";
import { trimCodeSnippet } from "@cy7/blog";

function CodeBlock({ code, language }) {
  const trimmedCode = trimCodeSnippet(code);

  return (
    <Highlight code={trimmedCode} language={language} Prism={Prism}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className}>
            <code className={className}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });

                return (
                  <div {...lineProps}>
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });

                      // My fix for the empty line issue. Apply an "empty"
                      // class, so the Prism styles can target empty lines.
                      //
                      // prism-react-renderer fixes this for you, but only if
                      // you use its JS object theme syntax. This is an easy
                      // way to do the same thing with global CSS.
                      //
                      // https://github.com/FormidableLabs/prism-react-renderer/issues/36
                      if (token.empty) {
                        tokenProps.className += " empty";
                      }

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
  language: PropTypes.oneOf(["js", "jsx"])
};

CodeBlock.defaultProps = {
  language: null
};

export { CodeBlock };
