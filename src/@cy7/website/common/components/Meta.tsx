import React from "react";
import { Helmet } from "react-helmet";

interface BaseMetaProps {
  /**
   * Set to true to disable auto-formatting the `<title>` with the suffix `- cy7.io`
   */
  noTitleTemplate?: boolean;

  /**
   * Defines the page's `<title>` tag (ie. it's name in the tab bar).
   */
  title: string;
}

interface MetaPropsWithDescription extends BaseMetaProps {
  /**
   * Defines the content of the page's `<meta name="description">` tag.
   *
   * Must be provided, unless `noIndex` is true.
   */
  description: string;
}

interface MetaPropsWithNoIndex extends BaseMetaProps {
  /**
   * Use the `noIndex` prop to exclude the page from search engine indexing using the `<meta content="noindex" name="robots" />` tag.
   *
   * A description should not be provided when using `noIndex`.
   */
  noIndex: true;
}

type MetaProps = MetaPropsWithDescription | MetaPropsWithNoIndex;

function Meta(props: MetaProps): React.ReactElement {
  const { noTitleTemplate = false, title } = props;

  return (
    <Helmet
      title={title}
      titleTemplate={noTitleTemplate ? undefined : "%s — cy7.io"}
    >
      {"description" in props && (
        <meta content={props.description} name="description" />
      )}
      {"noIndex" in props && <meta content="noindex" name="robots" />}
      {/* Render a custom meta tag displaying git sha for the latest build */}
      {process.env.GATSBY_BUILD_SHA && (
        <meta content={process.env.GATSBY_BUILD_SHA} name="build-sha" />
      )}
    </Helmet>
  );
}

export { Meta };
