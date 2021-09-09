import { Gutters, MaxWidth, styled } from "@cy7/design-system";
import { Link } from "@cy7/website/common";
import { warningSection } from "@cy7/stitches";
import React from "react";

const Container = styled(Gutters, {
  backgroundColor: "$bg",
  color: "$bodyText",
  paddingBottom: "$1",
  paddingTop: "$1",
  textAlign: "center",

  "@supports (display: grid)": {
    display: "none",
  },
});

const Text = styled("p", {
  fontSize: "15px",
  margin: "auto",
  maxWidth: "$maxWidthBestForText",
});

function OldBrowserWarning(): React.ReactElement {
  return (
    <Container className={warningSection}>
      <MaxWidth>
        <Text>
          Your web browser is outdated, and isn&apos;t supported by this
          website. Read more about upgrading to a modern browser at{" "}
          <Link to="https://browsehappy.com/" type="external">
            browsehappy.com
          </Link>
          .
        </Text>
      </MaxWidth>
    </Container>
  );
}

export { OldBrowserWarning };
