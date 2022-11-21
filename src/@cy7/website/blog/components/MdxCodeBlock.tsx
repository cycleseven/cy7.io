import React from "react";
import { SupportedCodeBlockLanguages } from "@cy7/website/blog/types";
import CodeBlock from "@cy7/website/blog/components/CodeBlock";

interface MdxCodeBlockProps {
  children: {
    props: {
      children: string;
      className: string;
    };
  };
}

function MdxCodeBlock({ children }: MdxCodeBlockProps): React.ReactElement {
  const props = children.props;
  const code = props.children;
  const language = (props.className
    ? props.className.replace(/language-/, "")
    : null) as SupportedCodeBlockLanguages | null;

  return <CodeBlock code={code} language={language} />;
}

export default MdxCodeBlock;
