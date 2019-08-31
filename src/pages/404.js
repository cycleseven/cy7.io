import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Logo from "../components/Logo";

function NotFoundPage() {
  return (
    <Layout>
      <Helmet title="cy7.io" />
      <Logo />
    </Layout>
  );
}

export default NotFoundPage;
