import React from "react";
import { Helmet } from "react-helmet";

interface BaseMetaProps {
  noTitleTemplate?: boolean;
  title: string;
}

interface MetaPropsWithDescription extends BaseMetaProps {
  description: string;
}

interface MetaPropsWithNoIndex extends BaseMetaProps {
  noIndex: true;
}

type MetaProps = MetaPropsWithDescription | MetaPropsWithNoIndex;

function Meta(props: MetaProps): JSX.Element {
  const { noTitleTemplate = false, title } = props;

  return (
    <Helmet
      title={title}
      titleTemplate={noTitleTemplate ? undefined : "%s — cy7.io"}
    >
      {"description" in props && (
        <meta content={props.description} name="description" />
      )}
      {"noIndex" in props && <meta name="robots" content="noindex" />}
      {/* Render a custom meta tag displaying git sha for the latest build */}
      {process.env.GATSBY_BUILD_SHA && (
        <meta content={process.env.GATSBY_BUILD_SHA} name="build-sha" />
      )}
    </Helmet>
  );
}

export { Meta };
