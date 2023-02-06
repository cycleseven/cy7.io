import React from "react";
import { SupportedCodeBlockLanguages } from "@cy7/website/blog/types";
import CodeBlock from "@cy7/website/blog/components/CodeBlock";

interface MdxCodeBlockProps {
  children?: React.ReactNode;
}

function MdxPre({ children }: MdxCodeBlockProps): React.ReactElement {
  const element = React.Children.only(children) as React.ReactElement;

  if (!element) {
    throw new Error("<MdxCodeBlock /> rendered without valid children");
  }

  const props = element.props;
  const code = props.children;
  const language = (
    props.className ? props.className.replace(/language-/, "") : null
  ) as SupportedCodeBlockLanguages | null;

  return <CodeBlock code={code} language={language} />;
}

export default MdxPre;
