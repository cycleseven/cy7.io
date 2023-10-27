import { Img, Link, Meta, Page } from "@cy7/website/common";
import { Hero } from "@cy7/website/home";
import { Grid, Gutters, MaxWidth, Stack, styled } from "@cy7/design-system";
import { HomePageQuery } from "@cy7/gql-types";
import { graphql } from "gatsby";
import React from "react";

const Header = styled("header", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  margin: "0 $1",
});

const Main = styled("main", MaxWidth, {
  paddingBottom: "$4",
});

const Intro = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: 0,

  "& > * + *": {
    marginLeft: "$0-75",
  },

  "@bp1": {
    "& > * + *": {
      marginLeft: "$1",
    },
  },
});

// TODO: this is an example of why directly styling h1/p/etc actually has
//       downsides. I want the intro sentence to appear like a <p> but actually
//       be an <h1>. That means adding properties to "undo" font-family,
//       text-transform, etc.
//
//       Even without that, having margins on text elements by default undermines
//       the approach to spacing used elsewhere (ie. components don't bring
//       their own whitespace)
const IntroText = styled("p", {
  fontFamily: "$body",
  fontSize: "0.95rem", // Should be a theme value
  fontWeight: "$regular",
  letterSpacing: "-0.01ch",
  lineHeight: 1.65,
  marginBottom: "$0-75",
  maxWidth: "36ch",
  textTransform: "none",
});

const IntroHeading = styled("h1", IntroText);

const HeroImage = styled(Hero, {
  width: "100%",
  maxWidth: "420px",
});

const MeImage = styled("div", {
  borderRadius: "50%",
  boxShadow: "1px 2px 0 1px $colors$accent",
  flexShrink: 0,
  size: "72px",
  overflow: "hidden",

  // A hack to make the border-radius work in Safari
  // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari
  willChange: "transform",
});

const SectionHeading = styled("h2", {
  borderBottom: "solid 4px $colors$headerBorder",
  marginBottom: "$2",
  marginTop: 0,
  paddingBottom: "$0-33",
  textTransform: "uppercase",
});

const ShowcaseHeading = styled("h3", {
  color: "$headerText",
  fontSize: "1.2rem",
  lineHeight: 1.3,
  margin: 0,

  "& a": {
    boxShadow: "inset 0 -2px $colors$bg, inset 0 -10px $colors$linkBorder",
  },

  "& a:hover:not(:focus)": {
    boxShadow: "inset 0 -2px $colors$bg, inset 0 -10px $colors$linkBorderHover",
  },

  "& a:focus": {
    borderBottom: "solid 3px $colors$linkFocusBorder",
    boxShadow: "none",
  },
});

const ShowcaseDescription = styled("p", {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  margin: 0,
  maxWidth: "80ch",
});

const ShowcaseDate = styled("p", {
  color: "$dateText",
  fontSize: "0.54rem",
  fontWeight: "$bold",
  lineHeight: "$space$1",
  margin: "$0 0 $0-2 0",
  textTransform: "uppercase",
  letterSpacing: "0.11em",

  "@bp1": {
    marginBottom: "$0-33",
  },
});

interface HomePageProps {
  data: HomePageQuery;
}

function HomePage({ data }: HomePageProps): React.ReactElement {
  const blogPosts = data?.blogPosts?.nodes;
  const photoOfMe = data?.photoOfMe?.childImageSharp?.gatsbyImageData;

  return (
    <Page>
      <Gutters>
        <Stack space="3">
          <Header>
            <HeroImage />
          </Header>

          <Main>
            <Stack space="3">
              <Intro>
                <MeImage>
                  <Img
                    alt="owen's face"
                    height={48}
                    image={photoOfMe}
                    loading="eager"
                    width={48}
                  />
                </MeImage>
                <div>
                  <IntroHeading>
                    I&apos;m Owen, a software engineer from Edinburgh, Scotland{" "}
                    <span aria-label="wave" role="img">
                      👋
                    </span>
                  </IntroHeading>
                  <IntroText>
                    This is my wee website where I write about web development
                    and other personal interests.
                  </IntroText>
                </div>
              </Intro>
              <section>
                <SectionHeading>Blog</SectionHeading>
                <Grid>
                  {blogPosts.map((blogPost) => {
                    if (
                      blogPost?.fields === null ||
                      blogPost?.fields === undefined ||
                      blogPost?.frontmatter === null ||
                      blogPost?.frontmatter === undefined
                    ) {
                      throw new Error(
                        `Invalid blog post data: ${JSON.stringify(blogPost)}`
                      );
                    }

                    return (
                      <div key={blogPost.frontmatter.slug}>
                        <ShowcaseHeading>
                          <Link to={`/${blogPost.frontmatter.slug}`}>
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
                    );
                  })}
                </Grid>
              </section>
            </Stack>
          </Main>
        </Stack>
      </Gutters>
    </Page>
  );
}
/* eslint-enable */

export function Head({ data }: HomePageProps): React.ReactNode {
  const description = data?.site?.siteMetadata?.description;

  if (typeof description !== "string") {
    throw new Error("Description must be provided in Gatsby site metadata");
  }

  return (
    <Meta
      description={description}
      noTitleTemplate
      title="cy7.io — owen's wee website"
    />
  );
}

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
        gatsbyImageData(width: 72, quality: 50)
      }
    }
  }
`;

export default HomePage;
