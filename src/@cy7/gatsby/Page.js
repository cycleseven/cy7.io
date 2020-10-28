import { Footer } from "@cy7/gatsby/Footer";
import { FullHeightPage } from "@cy7/gatsby/FullHeightPage";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  flex-grow: 1;
`;

function Page({ children }) {
  return (
    <FullHeightPage>
      <MainContent>{children}</MainContent>
      <Footer />
    </FullHeightPage>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export { Page };
