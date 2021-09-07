import React, { ComponentProps, useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    applyGlobalStyles();
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.add("cy7-full-height-page");

    return function onFullHeightPageUnmount() {
      document.documentElement.classList.remove("cy7-full-height-page");
    };
  }, []);

  return (
    <React.Fragment>
      <FullHeightContainer {...props} />
    </React.Fragment>
  );
}

export { FullHeightPage };
