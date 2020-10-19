import { MdxCodeBlock, MdxInlineCode } from "@cy7/blog";
import {
  Meta,
  PlainLink,
  paletteColor,
  rhythm,
  GutterBox
} from "@cy7/designSystem";
import { MDXProvider } from "@mdx-js/react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";

const Article = styled.article`
  margin: auto;
  max-width: 38rem;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${rhythm(1.5)};
  margin-top: ${rhythm(3)};
`;

const Heading = styled.h1`
  margin: 0;
`;

const HeaderImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const BlogDate = styled.p`
  color: ${paletteColor("paper", "header")};
  opacity: 0.8;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  line-height: ${rhythm(1)};
  margin: ${rhythm(1 / 4)} 0 0 0;
  text-transform: uppercase;
`;

const mdxComponents = {
  inlineCode: MdxInlineCode,
  pre: MdxCodeBlock
};

// There's not much gain to be had from maintaining prop type definitions for
// this component, because they're passed from Gatsby, it's not an interface
// defined by us. The component will break in an obvious way if the data prop
// is read incorrectly anyway.
/* eslint-disable react/prop-types */
const BlogPost = ({ data }) => {
  const blogPost = data.blogPost;
  const towersImage = data.towersImage.childImageSharp.fixed;

  return (
    <GutterBox>
      <Article>
        <Meta title={blogPost.frontmatter.title} />

        <HeaderImageContainer>
          <PlainLink aria-label="Return to home" as={Link} to="/">
            <Img fadeIn={false} fixed={towersImage} loading="eager" />
          </PlainLink>
        </HeaderImageContainer>

        <Header>
          <Heading>{blogPost.frontmatter.title}</Heading>
          <BlogDate>
            <time dateTime={blogPost.frontmatter.date}>
              {blogPost.fields.friendlyDate}
            </time>
          </BlogDate>
        </Header>

        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{blogPost.body}</MDXRenderer>
        </MDXProvider>
      </Article>
    </GutterBox>
  );
};
/* eslint-enable */

export const query = graphql`
  query blogPostPage($slug: String!) {
    blogPost: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      fields {
        friendlyDate
      }
      frontmatter {
        date
        title
      }
    }

    towersImage: file(relativePath: { eq: "tower.png" }) {
      childImageSharp {
        fixed(width: 190) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default BlogPost;
