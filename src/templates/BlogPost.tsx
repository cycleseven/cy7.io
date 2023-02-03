import {
  MdxBlockquote,
  MdxCodeBlock,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
  MdxInlineCode,
  MdxLink,
} from "@cy7/website/blog";
import { styled, Gutters, MaxWidth } from "@cy7/design-system";
import { Meta, Page, WarpTotem } from "@cy7/website/common";
import { BlogPostPageQuery } from "@cy7/gql-types";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import React from "react";

const Root = styled(MaxWidth, {
  paddingBottom: "$3",
});

const BlogHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "$1-5",
  marginTop: "$3",
});

const Heading = styled("h1", {
  margin: "$0",
});

const BlogDate = styled("p", {
  color: "$dateText",
  fontSize: "0.6rem",
  fontWeight: "$bold",
  lineHeight: 1,
  margin: "$0-5 0 0 0",
  textTransform: "uppercase",
  letterSpacing: "0.11em",
});

const mdxComponents = {
  inlineCode: MdxInlineCode,
  pre: MdxCodeBlock,
  a: MdxLink,
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  h6: MdxH6,
  blockquote: MdxBlockquote,
};

interface BlogPostProps {
  children: React.ReactNode;
  data: BlogPostPageQuery;
}

function BlogPost({ data, children }: BlogPostProps): React.ReactElement {
  const blogPost = data.blogPost;

  if (
    blogPost?.fields === null ||
    blogPost?.fields === undefined ||
    blogPost?.frontmatter === null ||
    blogPost?.frontmatter === undefined ||
    blogPost?.frontmatter?.description === null ||
    blogPost?.frontmatter?.description === undefined
  ) {
    throw new Error(`Invalid blog post data: ${JSON.stringify(blogPost)}`);
  }

  return (
    <Page>
      <Gutters>
        <Root width="bestForText">
          <main>
            <Meta
              description={blogPost.frontmatter.description}
              title={blogPost.frontmatter.title}
            />

            <nav>
              <WarpTotem />
            </nav>

            <article>
              <BlogHeader>
                <Heading>{blogPost.frontmatter.title}</Heading>
                <BlogDate>
                  <time dateTime={blogPost.frontmatter.date}>
                    {blogPost.fields.friendlyDate}
                  </time>
                </BlogDate>
              </BlogHeader>

              <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            </article>
          </main>
        </Root>
      </Gutters>
    </Page>
  );
}

export const query = graphql`
  query blogPostPage($slug: String!) {
    blogPost: mdx(frontmatter: { slug: { eq: $slug } }) {
      fields {
        friendlyDate
      }
      frontmatter {
        date
        description
        title
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

export default BlogPost;
