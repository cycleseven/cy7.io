import { Link } from "@cy7/gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

/**
 * Header image that takes you home (named as a wee homage to Stardew Valley).
 */
function WarpTotem() {
  const data = useStaticQuery(graphql`
    query warpTotemComponent {
      towersImage: file(relativePath: { eq: "tower.png" }) {
        childImageSharp {
          fixed(width: 190) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);
  const towersImage = data.towersImage.childImageSharp.fixed;

  return (
    <Container>
      <Link
        appearance="image"
        aria-label="Return to home"
        title="Return to home"
        to="/"
      >
        <Img fadeIn={false} fixed={towersImage} loading="eager" />
      </Link>
    </Container>
  );
}

export { WarpTotem };
