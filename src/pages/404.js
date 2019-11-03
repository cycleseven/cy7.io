import { CenteredPage, Logo as BaseLogo, Meta } from "@cy7/designSystem";
import React from "react";
import styled from "styled-components";

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
