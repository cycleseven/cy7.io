import { GutterBox, Meta, color, fontStack, rhythm } from "@cy7/designSystem";
import Hero from "@cy7/home/Hero";
import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: ${rhythm(4)} auto;
  max-width: 56rem;
`;

const Intro = styled.p`
  max-width: 23em;
`;

const HeroImage = styled(Hero)`
  max-width: 460px;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-gap: ${rhythm(1.5)};

  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-gap: ${rhythm(1)} ${rhythm(2.5)};
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SectionHeading = styled.h2`
  border-bottom: solid 4px;
  border-bottom-color: ${color("glasgow")};
  font-family: ${fontStack("oswald")};
  margin-bottom: ${rhythm(2)};
  margin-top: ${rhythm(4)};
  padding-bottom: ${rhythm(0.5)};
  text-transform: uppercase;
`;

const ShowcaseHeading = styled.h3`
  font-size: 1.2rem;
  line-height: 1.3;
  margin-bottom: ${rhythm(0.5)};

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

/* eslint-disable react/prop-types */
function HomePage({ data }) {
  const blogPosts = data.blogPosts.nodes;

  return (
    <GutterBox>
      <Meta noTitleTemplate title="cy7.io — owen's wee website" />
      <Header>
        <HeroImage />
      </Header>
      <Main>
        <Intro>I&apos;m Owen, a web developer from Edinburgh, Scotland.</Intro>
        <section>
          <SectionHeading>Blog</SectionHeading>
          <ShowcaseGrid>
            {blogPosts.map(blogPost => (
              <div>
                <ShowcaseHeading>
                  <Link to={`/${blogPost.frontmatter.slug}`}>
                    {blogPost.frontmatter.title}
                  </Link>
                </ShowcaseHeading>
                <p>{blogPost.frontmatter.description}</p>
              </div>
            ))}
          </ShowcaseGrid>
        </section>
      </Main>
    </GutterBox>
  );
}
/* eslint-enable */

export const query = graphql`
  query homePage {
    blogPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          description
          title
          slug
        }
      }
    }
  }
`;

export default HomePage;
