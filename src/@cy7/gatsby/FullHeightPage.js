import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const FullHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 300px;
`;

const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
