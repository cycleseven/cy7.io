import { Link, Meta, Page, WarpTotem } from "@cy7/website/common";
import { Gutters, MaxWidth, styled } from "@cy7/design-system";
import React from "react";

const Article = styled("article", MaxWidth, {
  marginY: "$3",
});

function NotFoundPage(): React.ReactElement {
  return (
    <Page>
      <Gutters>
        <Meta noIndex title="Not found" />
        <nav>
          <WarpTotem />
        </nav>
        <main>
          <Article width="bestForText">
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
        </main>
      </Gutters>
    </Page>
  );
}

export default NotFoundPage;
