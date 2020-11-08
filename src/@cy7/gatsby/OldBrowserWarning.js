import React from "react";
import { GutterBox, color, ColorModeProvider } from "@cy7/designSystem";
import { Link } from "@cy7/gatsby";
import styled from "styled-components";

const Container = styled(GutterBox)`
  background-color: ${color("bg")};
  color: ${color("bodyText")};
  padding-bottom: 18px;
  padding-top: 18px;
  text-align: center;
`;

const Text = styled.p`
  margin: auto;
  max-width: 77ch;
`;

function OldBrowserWarning() {
  return (
    <ColorModeProvider mode="warning">
      <Container>
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
