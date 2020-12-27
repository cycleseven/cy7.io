import { Cy7ThemeProvider } from "@cy7/designSystem";
import { Footer } from "@cy7/gatsby/Footer";
import { FullHeightPage } from "@cy7/gatsby/FullHeightPage";
import { OldBrowserWarning } from "@cy7/gatsby/OldBrowserWarning";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// I'd ideally prefer to define fonts inside of a createGlobalStyle, via
// Cy7ThemeProvider. That way the entire design system can be set up with a
// single import.
//
// But using @font-face inside of Styled Components causes fonts to be
// re-fetched on each re-render, horrible for performance and UX. So it's worth
// using regular global CSS for the fonts.
//
// It would also be possible to have this side-effect import in Cy7ThemeProvider,
// but that could impact ability to tree-shake the design system.
//
// See:
// https://github.com/styled-components/styled-components/issues/2227
// https://github.com/styled-components/styled-components/issues/2900
import "@cy7/designSystem/fonts.css";

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
