import React from "react";
import { Helmet } from "react-helmet";

import DarkPage from "../components/DarkPage";
import Logo from "../components/Logo";

function NotFoundPage() {
  return (
    <DarkPage>
      <Helmet title="cy7.io" />
      <Logo />
    </DarkPage>
  );
}

export default NotFoundPage;
