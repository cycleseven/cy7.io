/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

function onRenderBody({ setHtmlAttributes }) {
  // Set lang="en" attribute in root <html> element
  setHtmlAttributes({
    lang: "en"
  });
}

export { onRenderBody };
