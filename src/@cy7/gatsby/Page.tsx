import { applyGlobalStyles, styled } from "@cy7/design-system";
import { Footer } from "@cy7/gatsby/Footer";
import { FullHeightPage } from "@cy7/gatsby/FullHeightPage";
import { OldBrowserWarning } from "@cy7/gatsby/OldBrowserWarning";
import PropTypes from "prop-types";
import React, { useLayoutEffect } from "react";

const MainContent = styled("div", {
  flexGrow: 1
});

type PageProps = {
  children: React.ReactNode;
}

function Page({ children }: PageProps): React.ReactElement {
  useLayoutEffect(() => {
    applyGlobalStyles();
  });

  return (
    <React.Fragment>
      <OldBrowserWarning />
      <FullHeightPage>
        <MainContent>{children}</MainContent>
        <Footer />
      </FullHeightPage>
    </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Page };
