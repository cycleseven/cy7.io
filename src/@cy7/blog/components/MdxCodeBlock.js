import React from "react";
import { CodeBlock } from "@cy7/blog";

// Props are going to be automatically provided by gatsby-plugin-mdx
/* eslint-disable react/prop-types */
function MdxCodeBlock({ children }) {
  const props = children.props;
  const code = props.children;
  const language = props.className
    ? props.className.replace(/language-/, "")
    : null;

  return <CodeBlock code={code} language={language} />;
}
/* eslint-enable */

export { MdxCodeBlock };
