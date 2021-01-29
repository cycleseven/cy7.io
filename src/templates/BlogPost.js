import {
  MdxCodeBlock,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
  MdxInlineCode,
} from "@cy7/blog";
import { rhythm, GutterBox, color, MaxWidth } from "@cy7/designSystem";
import { Meta, Link, Page, WarpTotem } from "@cy7/gatsby";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";

const Article = styled(MaxWidth).attrs({ as: "article", width: "bestForText" })`
  padding-bottom: ${rhythm(3)};
`;

const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${rhythm(1.5)};
  margin-top: ${rhythm(3)};
`;

const Heading = styled.h1`
  margin: 0;
`;

const BlogDate = styled.p`
  color: ${color("bodyText")};
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
  pre: MdxCodeBlock,
  a: Link,
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  h6: MdxH6,
};

// There's not much gain to be had from maintaining prop type definitions for
// this component, because they're passed from Gatsby, it's not an interface
// defined by us. The component will break in an obvious way if the data prop
// is read incorrectly anyway.
/* eslint-disable react/prop-types */
const BlogPost = ({ data }) => {
  const blogPost = data.blogPost;

  return (
    <Page>
      <GutterBox>
        <Article>
          <Meta
            description={blogPost.frontmatter.description}
            title={blogPost.frontmatter.title}
          />

          <nav>
            <WarpTotem />
          </nav>

          <main>
            <BlogHeader>
              <Heading>{blogPost.frontmatter.title}</Heading>
              <BlogDate>
                <time dateTime={blogPost.frontmatter.date}>
                  {blogPost.fields.friendlyDate}
                </time>
              </BlogDate>
            </BlogHeader>

            <MDXProvider components={mdxComponents}>
              <MDXRenderer>{blogPost.body}</MDXRenderer>
            </MDXProvider>
          </main>
        </Article>
      </GutterBox>
    </Page>
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
  }
`;

export default BlogPost;
