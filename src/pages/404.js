import { Link, Meta, Page, WarpTotem } from "@cy7/gatsby";
import React from "react";
import styled from "styled-components";
import { MaxWidth, rhythm } from "@cy7/designSystem";

const Article = styled(MaxWidth).attrs({ as: "article", width: "bestForText" })`
  margin-bottom: ${rhythm(3)};
  margin-top: ${rhythm(3)};
`;

function NotFoundPage() {
  return (
    <Page>
      <Meta title="Not found" />
      <WarpTotem />
      <Article>
        <h1>
          Oh no{" "}
          <span aria-label="sad face" role="img">
            😓
          </span>
        </h1>
        <p>
          This page doesn&apos;t exist. <Link to="/">Return home?</Link>
        </p>
      </Article>
    </Page>
  );
}

export default NotFoundPage;
