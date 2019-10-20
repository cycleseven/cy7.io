import React from "react";
import styled from "styled-components";
import { CenteredPage, Logo as BaseLogo, Meta } from "components";

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
