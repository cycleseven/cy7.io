import { Meta } from "@cy7/designSystem";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Article = styled.article`
  margin: auto;
  max-width: 37rem;
  padding: 0 3rem;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${props => props.theme.typography.rhythm(3)};
  padding-top: ${props => props.theme.typography.rhythm(3)};
`;

const Heading = styled.h1`
  margin: 0;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const BlogDate = styled.p`
  font-weight: 600;
  opacity: 0.6;
  font-family: ${props => props.theme.typography.getHeaderFontFamily()};
  font-size: ${props => props.theme.typography.scale(-0.3).fontSize};
  margin: ${props => props.theme.typography.rhythm(1 / 4)} 0 0 0;
`;

const BlogPost = ({ data }) => {
  const blogPost = data.blogPost;
  const towersImage = data.towersImage.childImageSharp.fixed;

  return (
    <Article>
      <Meta title={blogPost.frontmatter.title} />
      <BackgroundImageContainer>
        <Img fixed={towersImage} />
      </BackgroundImageContainer>

      <Header>
        <Heading>{blogPost.frontmatter.title}</Heading>
        <BlogDate>
          <time dateTime={blogPost.frontmatter.date}>
            {blogPost.fields.friendlyDate}
          </time>
        </BlogDate>
      </Header>

      <div dangerouslySetInnerHTML={{ __html: blogPost.html }} />
    </Article>
  );
};

export const query = graphql`
  query blogPostPage($slug: String!) {
    blogPost: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      fields {
        friendlyDate
      }
      frontmatter {
        date
        title
      }
      html
    }

    towersImage: file(relativePath: { eq: "towers.png" }) {
      childImageSharp {
        fixed(width: 260) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default BlogPost;
