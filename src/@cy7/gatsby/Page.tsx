import { Cy7ThemeProvider } from "@cy7/designSystem";
import { applyGlobalStyles, styled } from "@cy7/design-system";
import { Footer } from "@cy7/gatsby/Footer";
import { FullHeightPage } from "@cy7/gatsby/FullHeightPage";
import { OldBrowserWarning } from "@cy7/gatsby/OldBrowserWarning";
import PropTypes from "prop-types";
import React, { useLayoutEffect } from "react";

const MainContent = styled("div", {
  flexGrow: 1
});

interface PageProps {
  children: JSX.Element;
}

function Page({ children }: PageProps) {
  useLayoutEffect(() => {
    applyGlobalStyles();
  });

  return (
    <Cy7ThemeProvider>
      <OldBrowserWarning />
      <FullHeightPage>
        <MainContent>{children}</MainContent>
        <Footer />
      </FullHeightPage>
    </Cy7ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Page };
