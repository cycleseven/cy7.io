import { trimCodeSnippet } from "@cy7/blog/codeBlocks";
import Code from "@cy7/blog/components/codeBlock/Code";
import CodeContainer from "@cy7/blog/components/codeBlock/CodeContainer";
import HighlightedCode from "@cy7/blog/components/codeBlock/HighlightedCode";
import OutputContainer from "@cy7/blog/components/codeBlock/OutputContainer";
import OutputPre from "@cy7/blog/components/codeBlock/OutputPre";
import OutputWell from "@cy7/blog/components/codeBlock/OutputWell";
import Tag from "@cy7/blog/components/codeBlock/Tag";
import { SupportedCodeBlockLanguages } from "@cy7/blog/types";
import React from "react";

interface RegularCodeBlockProps {
  code: string;
  language: SupportedCodeBlockLanguages;
  output?: string | null;
  outputType?: "error" | "regular";
}

interface OutputBlockProps {
  code?: null;
  language?: null;
  output: string;
  outputType?: "error" | "regular";
}

type CodeBlockProps = RegularCodeBlockProps | OutputBlockProps;

function CodeBlock({
  code = null,
  language,
  output = null,
  outputType = "regular",
}: CodeBlockProps): React.ReactElement {
  const trimmedCode = code ? trimCodeSnippet(code) : null;
  const trimmedOutput = output ? trimCodeSnippet(output) : null;

  return (
    <CodeContainer>
      {trimmedCode && (
        <HighlightedCode code={trimmedCode} language={language} />
      )}

      {output && (
        <OutputContainer>
          <OutputWell color={outputType}>
            <Tag color={outputType}>Output</Tag>
            <OutputPre color={outputType}>
              <Code>{trimmedOutput}</Code>
            </OutputPre>
          </OutputWell>
        </OutputContainer>
      )}
    </CodeContainer>
  );
}

export default CodeBlock;
