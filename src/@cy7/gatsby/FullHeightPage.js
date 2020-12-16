import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const FullHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 300px;
`;

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

function FullHeightPage(props) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <FullHeightContainer {...props} />
    </React.Fragment>
  );
}

export { FullHeightPage };