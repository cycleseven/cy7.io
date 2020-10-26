import { CenteredPage, Logo as BaseLogo } from "@cy7/designSystem";
import { Meta } from "@cy7/gatsby";
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
