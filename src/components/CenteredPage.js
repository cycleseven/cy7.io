import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const FullHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 48px;
`;

const GlobalStyles = createGlobalStyle`
  html,  
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

function CenteredPage(props) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <FullHeightContainer {...props} />
    </React.Fragment>
  );
}

export { CenteredPage };
