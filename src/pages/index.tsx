import { Img, Link, Meta, Page } from "@cy7/gatsby";
import Hero from "@cy7/home/Hero";
import { Grid, GutterBox, MaxWidth, Stack, styled } from "@cy7/design-system";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

const Header = styled("header", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});

const Main = styled(MaxWidth, {
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
const IntroText = styled("h1", {
  fontFamily: "$body",
  fontSize: "0.95rem", // Should be a theme value
  fontWeight: "$regular",
  letterSpacing: 0,
  lineHeight: 1.65,
  marginBottom: "$0-75",
  maxWidth: "36ch",
  textTransform: "none",
});

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
});

const SectionHeading = styled("h2", {
  borderBottom: "solid 4px $colors$bodyText",
  marginBottom: "$2",
  marginTop: 0,
  paddingBottom: "$0-5",
  textTransform: "uppercase",
});

const ShowcaseHeading = styled("h3", {
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
  color: "$bodyText",
  opacity: 0.7,
  fontSize: "0.54rem",
  fontWeight: "$bold",
  lineHeight: "$space$1",
  margin: "$0 0 $0-2 0",
  textTransform: "uppercase",

  // TODO: undo ts-ignore when Stitches types stabilise
  // @ts-ignore
  letterSpacing: "0.11em",

  "@bp1": {
    marginBottom: "$0-33",
  },
});

// TODO: Not sure that these types buy me much. I'm just re-declaring what I
//       assume the types Gatsby gives me are. If I declare them incorrectly,
//       TypeScript won't know any better.
//
//       Look into GraphQL codegen.
interface BlogPostNode {
  fields: {
    friendlyDate: string;
  };

  frontmatter: {
    description: string;
    title: string;
    slug: string;
  };
}

interface Props {
  data: {
    blogPosts: {
      nodes: Array<BlogPostNode>;
    };

    photoOfMe: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };

    site: {
      siteMetadata: {
        description: string;
      };
    };
  };
}

function HomePage({ data }: Props): React.ReactElement {
  const blogPosts = data.blogPosts.nodes;
  const photoOfMe = data.photoOfMe.childImageSharp.gatsbyImageData;
  const { description } = data.site.siteMetadata;

  return (
    <Page>
      <GutterBox>
        <Meta
          description={description}
          noTitleTemplate
          title="cy7.io — owen's wee website"
        />

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
                  <IntroText>
                    I&apos;m Owen, a software engineer from Edinburgh, Scotland{" "}
                    <span aria-label="wave" role="img">
                      👋
                    </span>
                  </IntroText>
                  <IntroText as="p">
                    This is my wee website where I write about web development
                    and other personal interests.
                  </IntroText>
                </div>
              </Intro>
              <section>
                <SectionHeading>Blog</SectionHeading>
                <Grid>
                  {blogPosts.map((blogPost) => (
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
        gatsbyImageData(width: 72, placeholder: NONE, quality: 50)
      }
    }
  }
`;

export default HomePage;
