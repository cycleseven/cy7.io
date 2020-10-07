import { trimCodeSnippet } from "@cy7/blog/codeBlocks";
import { Token } from "@cy7/blog/components/Token";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Highlight, { Prism } from "prism-react-renderer";
import { hslAdjust } from "@cy7/css";

/**
 * These styles use Prism's okaidia as a starting point.
 *
 * Colors are heavily tweaked to blend in better with the cy7 theme (see
 * <Token /> component in particular).
 *
 * https://github.com/PrismJS/prism/blob/master/themes/prism-okaidia.css
 *
 * TODO: check cross-browser rendering of fonts, provide if needed
 */

const CodeContainer = styled.div`
  background-color: ${props => props.theme.colors.obsidian};
  border-radius: ${props => props.theme.scales.borderRadius()};
  box-shadow: 5px 5px 0 0 ${props => props.theme.colors.candyfloss};
  margin-bottom: ${props => props.theme.typography.rhythm(1)};
  overflow: auto;
`;

const Pre = styled.pre`
  color: ${props =>
    hslAdjust(props.theme.colors.candyfloss, {
      lightness: 0.93,
      saturation: 0.4
    })};
  display: inline-block;
  hyphens: none;
  padding: ${props => props.theme.typography.rhythm(1)};
  margin: 0;
  min-width: 100%;
`;

const Code = styled.code`
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
`;

const OutputContainer = styled.div`
  position: relative;

  ${Pre} + & {
    margin-top: ${props => props.theme.typography.rhythm(0.5)};
  }
`;

const OutputPre = styled(Pre)`
  background-color: ${props => props.theme.colors.obsidian};
  border-bottom-left-radius: ${props => props.theme.scales.borderRadius()};
  border-bottom-right-radius: ${props => props.theme.scales.borderRadius()};
  color: ${props =>
    props.outputType === "error"
      ? props.theme.colors.angrypeach
      : props.theme.colors.candyfloss};
  padding-top: ${props => props.theme.typography.rhythm(1)};
  padding-left: ${props => props.theme.typography.rhythm(1)};
`;

const Tag = styled.div`
  background-color: ${props =>
    props.outputType === "error"
      ? props.theme.colors.angrypeach
      : props.theme.colors.candyfloss};
  color: ${props => props.theme.colors.obsidian};
  font-size: ${props => props.theme.typography.scale(-0.7).fontSize};
  font-weight: 700;
  letter-spacing: 0.13em;
  left: 0;
  padding: 2px ${props => props.theme.typography.rhythm(1 / 2)} 2px
    ${props => props.theme.typography.rhythm()};
  position: absolute;
  text-transform: uppercase;
  transform: translateY(-50%);
  top: 0;
`;

function CodeBlock({ code, language, output, outputType }) {
  const trimmedCode = code ? trimCodeSnippet(code) : null;
  const trimmedOutput = output ? trimCodeSnippet(output) : null;

  return (
    <CodeContainer hasError={output !== null}>
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
        <OutputContainer>
          <OutputPre outputType={outputType}>
            <Code>{trimmedOutput}</Code>
          </OutputPre>

          {code && <Tag outputType={outputType}>Output</Tag>}
        </OutputContainer>
      )}
    </CodeContainer>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string,
  language: PropTypes.oneOf(["js", "jsx"]),
  output: PropTypes.string,
  outputType: PropTypes.oneOf(["error", "output"])
};

CodeBlock.defaultProps = {
  code: null,
  language: null,
  output: null,
  outputType: "output"
};

export { CodeBlock };
