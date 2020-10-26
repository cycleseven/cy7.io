import {
  GutterBox,
  Link,
  MaxWidth,
  Stack,
  color,
  rhythm
} from "@cy7/designSystem";
import Hero from "@cy7/home/Hero";
import { Meta, Page } from "@cy7/gatsby";
import { graphql, Link as GatsbyLink } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

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
  align-items: center;
  margin-bottom: 0;

  > * + * {
    margin-left: ${rhythm(1)};
  }
`;

const IntroText = styled.p`
  margin-bottom: 0;
  max-width: 25rem;
`;

const HeroImage = styled(Hero)`
  max-width: 460px;
`;

const MeImage = styled.div`
  border-radius: 50%;
  box-shadow: 1px 2px 0 1px ${color("candyfloss")};
  flex-shrink: 0;
  height: 72px;
  overflow: hidden;
  width: 72px;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  gap: ${rhythm(1.5)};

  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-gap: ${rhythm(1)} ${rhythm(2)};
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SectionHeading = styled.h2`
  border-bottom: solid 4px ${color("glasgow")};
  margin-bottom: ${rhythm(2)};
  margin-top: 0;
  padding-bottom: ${rhythm(0.5)};
  text-transform: uppercase;
`;

const ShowcaseHeading = styled.h3`
  font-size: 1.2rem;
  line-height: 1.3;
  margin: 0;

  // TODO: these anchor styles adjust the border-bottom
  a {
    box-shadow: inset 0 -2px ${color("paper")},
      inset 0 -10px ${({ theme }) => lighten(0.05, theme.colors.candyfloss)}};
  }

  a:hover {
    box-shadow: inset 0 -2px ${color("paper")},
      inset 0 -10px ${color("candyfloss")};
  }

  a:focus {
    border-bottom: solid 3px ${props => props.theme.colors.obsidian};
    box-shadow: none;
  }
`;

const ShowcaseDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ShowcaseDate = styled.p`
  color: ${color("glasgow")};
  opacity: 0.7;
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  line-height: ${rhythm(1)};
  margin: 0 0 ${rhythm(0.5)} 0;
  text-transform: uppercase;
`;

/* eslint-disable react/prop-types */
function HomePage({ data }) {
  const blogPosts = data.blogPosts.nodes;
  const photoOfMe = data.photoOfMe.childImageSharp.fixed;
  const { siteIntro } = data.site.siteMetadata;

  return (
    <Page>
      <GutterBox>
        <Meta noTitleTemplate title="cy7.io — owen's wee website" />

        <Stack space={5}>
          <Header>
            <HeroImage />
          </Header>
          <Main>
            <Stack space={5}>
              <Intro>
                <MeImage>
                  <Img fadeIn={false} fixed={photoOfMe} />
                </MeImage>
                <IntroText>{siteIntro}</IntroText>
              </Intro>
              <section>
                <SectionHeading>Blog</SectionHeading>
                <ShowcaseGrid>
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
                </ShowcaseGrid>
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
        siteIntro
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
        fixed(width: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default HomePage;
