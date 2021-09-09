import { applyGlobalStyles, styled } from "@cy7/design-system";
import { Footer } from "@cy7/website/common/components/Footer";
import { FullHeightPage } from "@cy7/website/common/components/FullHeightPage";
import { OldBrowserWarning } from "@cy7/website/common/components/OldBrowserWarning";
import React from "react";

const MainContent = styled("div", {
  flexGrow: 1,
});

type PageProps = {
  children: React.ReactNode;
};

function Page({ children }: PageProps): React.ReactElement {
  applyGlobalStyles();

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

export { Page };
