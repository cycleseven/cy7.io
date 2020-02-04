import { trimCodeSnippet } from "@cy7/blog/codeBlocks";
import { Token } from "@cy7/blog/components/Token";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Highlight, { Prism } from "prism-react-renderer";

/**
 * The <CodeBlock /> styles are use Prism's okaidia as a starting point.
 * Colours are heavily tweaked to blend in better with the cy7 theme (see
 * <Token /> component).
 *
 * https://github.com/PrismJS/prism/blob/master/themes/prism-okaidia.css
 *
 * TODO: check cross-browser rendering of fonts, provide if needed
 */

const Pre = styled.pre`
  background-color: ${props => props.theme.colours.obsidian()};
  color: ${props =>
    props.theme.colours.candyfloss({ lightness: 93, saturation: 40 })};
  hyphens: none;
  margin: 0;
  overflow: auto;
  padding: ${props => props.theme.typography.rhythm(1)};
  tab-size: 2;

  &:first-of-type {
    border-top-left-radius: ${props => props.theme.scales.borderRadius()};
    border-top-right-radius: ${props => props.theme.scales.borderRadius()};
  }

  &:last-of-type {
    border-bottom-left-radius: ${props => props.theme.scales.borderRadius()};
    border-bottom-right-radius: ${props => props.theme.scales.borderRadius()};
    margin-bottom: ${props => props.theme.typography.rhythm(1)};
  }
`;

const ErrorPre = styled(Pre)`
  background-color: ${props => props.theme.colours.candyfloss()};
  color: ${props =>
    props.theme.colours.candyfloss({ lightness: 6, saturation: 100 })};
`;

const Code = styled.code`
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
`;

function CodeBlock({ code, language, output }) {
  const trimmedCode = code ? trimCodeSnippet(code) : null;
  const trimmedOutput = output ? trimCodeSnippet(output) : null;

  return (
    <div>
      {code && (
        <Highlight code={trimmedCode} language={language} Prism={Prism}>
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
                          key: j
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
      )}

      {output && (
        <ErrorPre>
          <Code>{trimmedOutput}</Code>
        </ErrorPre>
      )}
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string,
  language: PropTypes.oneOf(["js", "jsx"]),
  output: PropTypes.string
};

CodeBlock.defaultProps = {
  code: null,
  language: null,
  output: null
};

export { CodeBlock };
