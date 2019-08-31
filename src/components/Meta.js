import React from "react";
import { Helmet } from "react-helmet";

function Meta() {
  return (
    <Helmet>
      {/* Render a custom meta tag displaying git sha for the latest build */}
      {process.env.GATSBY_BUILD_SHA && (
        <meta content={process.env.GATSBY_BUILD_SHA} name="build-sha" />
      )}
    </Helmet>
  );
}

export default Meta;
