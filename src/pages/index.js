import React from "react";
import styled from "styled-components";

import { CenteredPage } from "../components/CenteredPage";
import { Logo as BaseLogo } from "../components/Logo";
import { Meta } from "../components/Meta";

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
