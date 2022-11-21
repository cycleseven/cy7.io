import React, { ComponentProps } from "react";
import { Helmet } from "react-helmet";
import { globalCss, styled } from "@cy7/design-system";

const FullHeightContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  minWidth: "300px",
});

const applyGlobalStyles = globalCss({
  "html.cy7-full-height-page": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },

  "html.cy7-full-height-page body, html.cy7-full-height-page #___gatsby, html.cy7-full-height-page #gatsby-focus-wrapper": {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
});

type FullHeightPageProps = ComponentProps<typeof FullHeightContainer>;

function FullHeightPage(props: FullHeightPageProps): React.ReactElement {
  applyGlobalStyles();

  return (
    <React.Fragment>
      <Helmet>
        {/* The lang="en" attribute is set via gatsby-ssr APIs, so this warning
            is a false positive here.
        */}
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        <html className="cy7-full-height-page" />
      </Helmet>
      <FullHeightContainer {...props} />
    </React.Fragment>
  );
}

export default FullHeightPage;
