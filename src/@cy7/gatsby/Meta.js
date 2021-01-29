import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function Meta({ description, noTitleTemplate, title }) {
  return (
    <Helmet
      title={title}
      titleTemplate={noTitleTemplate ? null : "%s — cy7.io"}
    >
      <meta content={description} name="description" />
      {/* Render a custom meta tag displaying git sha for the latest build */}
      {process.env.GATSBY_BUILD_SHA && (
        <meta content={process.env.GATSBY_BUILD_SHA} name="build-sha" />
      )}
    </Helmet>
  );
}

Meta.propTypes = {
  description: PropTypes.string.isRequired,
  noTitleTemplate: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Meta.defaultProps = {
  noTitleTemplate: false,
};

export { Meta };
