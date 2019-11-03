import { CenteredPage, Logo as BaseLogo, Meta } from "@cy7/designSystem";
import React from "react";
import styled from "styled-components";

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
