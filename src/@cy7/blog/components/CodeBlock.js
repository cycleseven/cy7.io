import { trimCodeSnippet } from "@cy7/blog/codeBlocks";
import { Token } from "@cy7/blog/components/Token";
import { borderRadius, color, palette, rhythm } from "@cy7/designSystem";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Highlight, { Prism } from "prism-react-renderer";

/**
 * These styles use Prism's okaidia as a starting point.
 *
 * Colors are heavily tweaked to blend in better with the cy7 theme (see
 * <Token /> component in particular).
 *
 * https://github.com/PrismJS/prism/blob/master/themes/prism-okaidia.css
 */

const CodeContainer = styled.div`
  background-color: ${color("contrast")};
  border-radius: ${borderRadius()};
  box-shadow: 5px 5px 0 0 ${color("accent")};
  margin-bottom: ${rhythm(1)};
  overflow: auto;
`;

const Pre = styled.pre`
  color: ${palette("candyflossLite")};
  display: inline-block;
  hyphens: none;
  padding: ${rhythm(1)};
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
  margin: ${rhythm(0.5)};

  ${Pre} + & {
    margin-top: 0;
  }
`;

const OutputPre = styled(Pre)`
  color: ${({ theme, outputType }) =>
    outputType === "error"
      ? theme.palette.angrypeach
      : theme.palette.candyflossLite};
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${rhythm(0.25)};
`;

const OutputWell = styled.div`
  border: solid 2px
    ${({ theme, outputType }) =>
      outputType === "error"
        ? theme.palette.angrypeach
        : theme.palette.candyflossLite};
  border-radius: ${borderRadius()};
  color: ${color("contrast")};
  display: inline-block;
  margin-right: ${rhythm(1)};
  min-width: 100%;
  padding: ${rhythm(0.5)};
`;

const Tag = styled.div`
  color: ${({ theme, outputType }) =>
    outputType === "error"
      ? theme.palette.angrypeach
      : theme.palette.candyflossLite};
  font-size: 0.45rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  user-select: none;
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
          <OutputWell outputType={outputType}>
            <Tag outputType={outputType}>Output</Tag>
            <OutputPre outputType={outputType}>
              <Code>{trimmedOutput}</Code>
            </OutputPre>
          </OutputWell>
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