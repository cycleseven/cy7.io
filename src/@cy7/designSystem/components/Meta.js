import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function Meta({ title }) {
  return (
    <Helmet defaultTitle="cy7.io" title={title} titleTemplate="%s | cy7.io">
      {/* Render a custom meta tag displaying git sha for the latest build */}
      {process.env.GATSBY_BUILD_SHA && (
        <meta content={process.env.GATSBY_BUILD_SHA} name="build-sha" />
      )}
    </Helmet>
  );
}

Meta.propTypes = {
  title: PropTypes.string
};

Meta.defaultProps = {
  title: null
};

export { Meta };
