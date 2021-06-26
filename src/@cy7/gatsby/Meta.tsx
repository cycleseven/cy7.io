import React from "react";
import { Helmet } from "react-helmet";

export interface MetaProps {
  description: string;
  noTitleTemplate: boolean;
  title: string;
}

function Meta({ description, noTitleTemplate = false, title }: MetaProps): JSX.Element {
  return (
    <Helmet
      title={title}
      titleTemplate={noTitleTemplate ? undefined : "%s — cy7.io"}
    >
      <meta content={description} name="description" />
      {/* Render a custom meta tag displaying git sha for the latest build */}
      {process.env.GATSBY_BUILD_SHA && (
        <meta content={process.env.GATSBY_BUILD_SHA} name="build-sha" />
      )}
    </Helmet>
  );
}

export { Meta };
