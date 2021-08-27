import { GutterBox, Stack, styled } from "@cy7/design-system";
import { Link } from "@cy7/website/common";
import { warningSection } from "@cy7/stitches";
import React from "react";

const Container = styled(GutterBox, {
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
  maxWidth: "$maxWidthRegular",
});

function OldBrowserWarning(): React.ReactElement {
  return (
    <Container className={warningSection}>
      <Stack space="0-25">
        <Text>
          Your web browser is outdated, and isn&apos;t supported by this
          website. Things might look a little broken.
        </Text>
        <Text>
          <strong>
            Read more about upgrading to a modern browser at{" "}
            <Link to="https://browsehappy.com/" type="external">
              browsehappy.com
            </Link>
            .
          </strong>
        </Text>
      </Stack>
    </Container>
  );
}

export { OldBrowserWarning };
