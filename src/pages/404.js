import React from "react";
import styled from "styled-components";

import { CenteredPage } from "../components/CenteredPage";
import { Logo as BaseLogo } from "../components/Logo";
import { Meta } from "../components/Meta";

const Logo = styled(BaseLogo)`
  flex-shrink: 0;
  margin: auto;
`;

function NotFoundPage() {
  return (
    <CenteredPage>
      <Meta title="Not found" />
      <Logo />
    </CenteredPage>
  );
}

export default NotFoundPage;
