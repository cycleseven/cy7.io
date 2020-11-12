import { Cy7ThemeProvider } from "@cy7/designSystem";
import { Footer } from "@cy7/gatsby/Footer";
import { FullHeightPage } from "@cy7/gatsby/FullHeightPage";
import { OldBrowserWarning } from "@cy7/gatsby/OldBrowserWarning";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  flex-grow: 1;
`;

function Page({ children }) {
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
  children: PropTypes.node.isRequired
};

export { Page };
