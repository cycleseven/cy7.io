import { Link, Meta, Page, WarpTotem } from "@cy7/gatsby";
import { GutterBox, MaxWidth, styled } from "@cy7/design-system";
import React from "react";

const Article = styled(MaxWidth, {
  marginY: "$3",
});

function NotFoundPage() {
  return (
    <Page>
      <GutterBox>
        <Meta title="Not found" noIndex />
        <nav>
          <WarpTotem />
        </nav>
        <main>
          <Article as="article" width="bestForText">
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
      </GutterBox>
    </Page>
  );
}

export default NotFoundPage;
