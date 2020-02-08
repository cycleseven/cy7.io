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
  color: ${props =>
    props.theme.colours.candyfloss({ lightness: 93, saturation: 40 })};
  hyphens: none;
  padding: ${props => props.theme.typography.rhythm(1)};
  margin: 0;
  overflow: auto;
  tab-size: 2;
`;

const Code = styled.code`
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
`;

const ErrorPre = styled(Pre)`
  background-color: ${props =>
    props.theme.colours.angrypeach({ lightness: 10, saturation: 20 })};
  border-left: solid 5px ${props => props.theme.colours.angrypeach()};
  border-bottom-left-radius: ${props => props.theme.scales.borderRadius()};
  border-bottom-right-radius: ${props => props.theme.scales.borderRadius()};
  color: ${props => props.theme.colours.angrypeach()};
  padding-left: calc(${props => props.theme.typography.rhythm(1)} - 6px);
`;

const CodeContainer = styled.div`
  background-color: ${props => props.theme.colours.obsidian()};
  border-radius: ${props => props.theme.scales.borderRadius()};
  box-shadow: 5px 5px 0 0 ${props => props.theme.colours.candyfloss()};
  margin-bottom: ${props => props.theme.typography.rhythm(1)};
  position: relative;
`;

function CodeBlock({ code, language, output }) {
  const trimmedCode = code ? trimCodeSnippet(code) : null;
  const trimmedOutput = output ? trimCodeSnippet(output) : null;

  return (
    <CodeContainer>
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
    </CodeContainer>
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
