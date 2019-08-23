import React from "react";
import { Helmet } from "react-helmet";

import Logo from "../components/Logo";
import DarkPage from "../components/DarkPage";

function IndexPage() {
  return (
    <DarkPage>
      <Helmet title="cy7.io" />
      <Logo />
    </DarkPage>
  );
}

export default IndexPage;
