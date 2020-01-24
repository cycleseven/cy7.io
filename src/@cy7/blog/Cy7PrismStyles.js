import { createGlobalStyle } from "styled-components";

// This stylesheet uses Prism's okaidia as a starting point. Colours are heavily
// tweaked to blend in better with the cy7 theme.
// https://github.com/PrismJS/prism/blob/master/themes/prism-okaidia.css
// TODO: check cross-browser rendering of fonts, provide if needed
const Cy7PrismStyles = createGlobalStyle`
  .gatsby-highlight {
    margin-bottom: ${props => props.theme.typography.rhythm(1)}
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${props =>
      props.theme.colours.candyfloss({ lightness: 93, saturation: 40 })};
    background: none;
    hyphens: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    tab-size: 4;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: ${props => props.theme.typography.rhythm(1)};
    overflow: auto;
    border-radius: 5px;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: ${props => props.theme.colours.obsidian()};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1rem 0.3rem;
    border-radius: .3em;
    white-space: normal;
  }

  /**
   * Render blank lines properly. The "empty" class is a special one added by
   * this project's custom <CodeBlock /> component.
   *
   * https://github.com/FormidableLabs/prism-react-renderer/issues/36
   */
  .token.empty {
    display: inline-block;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props =>
      props.theme.colours.obsidian({ lightness: 50, saturation: 20 })};
  }

  .token.operator {
    color: ${props =>
      props.theme.colours.obsidian({ lightness: 80, saturation: 50 })};
  }

  .token.punctuation {
    color: ${props =>
      props.theme.colours.obsidian({ lightness: 55, saturation: 18 })};
  }

  .namespace {
    opacity: .7;
  }

  .token.boolean,
  .token.number,
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.important {
    color: ${props =>
      props.theme.colours.paper({ lightness: 70, saturation: 90 })};
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable,
  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name,
  .token.tag {
    color: ${props =>
      props.theme.colours.paper({ lightness: 86, saturation: 100 })};
  }

  .token.keyword {
    color: ${props =>
      props.theme.colours.candyfloss({ lightness: 80, saturation: 100 })};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
`;

export { Cy7PrismStyles };
