import React from "react";
import styled from "styled-components";
import { CenteredPage, Logo as BaseLogo, Meta } from "components";

const Logo = styled(BaseLogo)`
  flex-shrink: 0;
  margin: auto;
`;

function IndexPage() {
  return (
    <CenteredPage>
      <Meta />
      <Logo />
    </CenteredPage>
  );
}

export default IndexPage;
