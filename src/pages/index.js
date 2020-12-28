import {
  Grid,
  GutterBox,
  Link,
  MaxWidth,
  Stack,
  color,
  rhythm,
  fontStack
} from "@cy7/designSystem";
import Hero from "@cy7/home/Hero";
import { Meta, Page } from "@cy7/gatsby";
import { graphql, Link as GatsbyLink } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Main = styled(MaxWidth).attrs({ as: "main" })`
  padding-bottom: ${rhythm(4)};
`;

const Intro = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0;

  > * + * {
    margin-left: ${rhythm(0.75)};
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    > * + * {
      margin-left: ${rhythm(1)};
    }
  }
`;

// TODO: this is an example of why directly styling h1/p/etc actually has
//       downsides. I want the intro sentence to appear like a <p> but actually
//       be an <h1>. That means adding properties to "undo" font-family,
//       text-transform, etc.
//
//       Even without that, having margins on text elements by default undermines
//       the approach to spacing used elsewhere (ie. components don't bring
//       their own whitespace)
const IntroText = styled.h1`
  font-family: ${fontStack("body")};
  font-size: 0.95rem; // Should be a theme value
  font-weight: 400;
  line-height: 1.65;
  margin-bottom: ${rhythm(0.8)};
  max-width: 36ch;
  text-transform: none;
`;

const HeroImage = styled(Hero)`
  width: 100%;
  max-width: 420px;
`;

const MeImage = styled.div`
  border-radius: 50%;
  box-shadow: 1px 2px 0 1px ${color("accent")};
  flex-shrink: 0;
  height: 72px;
  overflow: hidden;
  width: 72px;
`;

const SectionHeading = styled.h2`
  border-bottom: solid 4px ${color("bodyText")};
  margin-bottom: ${rhythm(2)};
  margin-top: 0;
  padding-bottom: ${rhythm(0.5)};
  text-transform: uppercase;
`;

const ShowcaseHeading = styled.h3`
  font-size: 1.2rem;
  line-height: 1.3;
  margin: 0;

  // TODO: these anchor styles adjust the border-bottom. Same thing really
  //       applies to any heading + link combo, these adjustments are to adapt
  //       to the Oswald font, would be good to apply in a single place
  a {
    box-shadow: inset 0 -2px ${color("bg")},
      inset 0 -10px ${({ theme }) => theme.colors.linkBorder};
  }

  a:hover:not(:focus) {
    box-shadow: inset 0 -2px ${color("bg")},
      inset 0 -10px ${({ theme }) => theme.colors.linkBorderHover};
  }

  a:focus {
    border-bottom: solid 3px ${({ theme }) => theme.colors.linkFocusBorder};
    box-shadow: none;
  }
`;

const ShowcaseDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  max-width: 80ch;
`;

const ShowcaseDate = styled.p`
  color: ${color("bodyText")};
  opacity: 0.7;
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  line-height: ${rhythm(1)};
  margin: ${rhythm(0.1)} 0 ${rhythm(0.2)} 0;
  text-transform: uppercase;

  ${({ theme }) => theme.mediaQueries.desktop} {
    margin-bottom: ${rhythm(0.33)};
  }
`;

/* eslint-disable react/prop-types */
function HomePage({ data }) {
  const blogPosts = data.blogPosts.nodes;
  const photoOfMe = data.photoOfMe.childImageSharp.fixed;
  const { description } = data.site.siteMetadata;

  return (
    <Page>
      <GutterBox>
        <Meta
          description={description}
          noTitleTemplate
          title="cy7.io — owen's wee website"
        />

        <Stack space={3}>
          <Header>
            <HeroImage />
          </Header>
          <Main>
            <Stack space={3}>
              <Intro>
                <MeImage>
                  <Img
                    fadeIn={false}
                    fixed={photoOfMe}
                    height={48}
                    loading="eager"
                    width={48}
                  />
                </MeImage>
                <div>
                  <IntroText>
                    I&apos;m Owen, a software engineer from Edinburgh, Scotland{" "}
                    <span aria-label="wave" role="img">
                      👋
                    </span>
                  </IntroText>
                  <IntroText>
                    This is my wee website where I write about web development
                    and other personal interests.
                  </IntroText>
                </div>
              </Intro>
              <section>
                <SectionHeading>Blog</SectionHeading>
                <Grid>
                  {blogPosts.map(blogPost => (
                    <div key={blogPost.frontmatter.slug}>
                      <ShowcaseHeading>
                        <Link
                          as={GatsbyLink}
                          to={`/${blogPost.frontmatter.slug}`}
                        >
                          {blogPost.frontmatter.title}
                        </Link>
                      </ShowcaseHeading>
                      <ShowcaseDate>
                        {blogPost.fields.friendlyDate}
                      </ShowcaseDate>
                      <ShowcaseDescription>
                        {blogPost.frontmatter.description}
                      </ShowcaseDescription>
                    </div>
                  ))}
                </Grid>
              </section>
            </Stack>
          </Main>
        </Stack>
      </GutterBox>
    </Page>
  );
}
/* eslint-enable */

export const query = graphql`
  query homePage {
    site {
      siteMetadata {
        description
      }
    }

    blogPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          friendlyDate
        }
        frontmatter {
          description
          title
          slug
        }
      }
    }

    photoOfMe: file(relativePath: { eq: "goat.jpg" }) {
      childImageSharp {
        fixed(width: 72, quality: 50) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

export default HomePage;
