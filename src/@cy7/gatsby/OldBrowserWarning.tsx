import React from "react";
import { GutterBox, color, ColorModeProvider } from "@cy7/designSystem";
import { Link } from "@cy7/gatsby";
import styled from "styled-components";
import { warningSection } from "@cy7/stitches";

const Container = styled(GutterBox)`
  background-color: ${color("bg")};
  color: ${color("bodyText")};
  padding-bottom: 18px;
  padding-top: 18px;
  text-align: center;

  @supports (display: grid) {
    display: none;
  }
`;

const Text = styled.p`
  margin: auto;
  max-width: 77ch;
`;

function OldBrowserWarning() {
  return (
    <ColorModeProvider mode="warning">
      <Container className={warningSection}>
        <Text>
          Your web browser is outdated, and isn&apos;t supported by this
          website. Things might look a little broken.{" "}
          <strong>
            Read more about upgrading to a modern browser at{" "}
            <Link to="https://browsehappy.com/" type="external">
              browsehappy.com
            </Link>
            .
          </strong>
        </Text>
      </Container>
    </ColorModeProvider>
  );
}

export { OldBrowserWarning };
