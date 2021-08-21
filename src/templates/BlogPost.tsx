import {
  MdxCodeBlock,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
  MdxInlineCode,
  MdxLink,
} from "@cy7/blog";
import { styled, GutterBox, MaxWidth } from "@cy7/design-system";
import { Meta, Page, WarpTotem } from "@cy7/gatsby";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

const Root = styled(MaxWidth, {
  paddingBottom: "$3",
});

const BlogHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "$2",
  marginTop: "$3",
});

const Heading = styled("h1", {
  margin: "$0",
});

const BlogDate = styled("p", {
  color: "$bodyText",
  opacity: 0.8,
  fontSize: "0.6rem",
  fontWeight: "$bold",
  lineHeight: 1,
  margin: "$0-5 0 0 0",
  textTransform: "uppercase",

  // TODO: undo ts-ignore when Stitches types stabilise
  // @ts-ignore
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
};

interface BlogPostProps {
  data: {
    blogPost: {
      body: string & React.ReactNode;

      fields: {
        friendlyDate: string;
      };

      frontmatter: {
        date: string;
        description: string;
        title: string;
      };
    };
  };
}

function BlogPost({ data }: BlogPostProps): React.ReactElement {
  const blogPost = data.blogPost;

  return (
    <Page>
      <GutterBox>
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

              <MDXProvider components={mdxComponents}>
                <MDXRenderer>{blogPost.body}</MDXRenderer>
              </MDXProvider>
            </article>
          </main>
        </Root>
      </GutterBox>
    </Page>
  );
}

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
