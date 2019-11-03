import { Logo, Meta } from "@cy7/designSystem";
import { graphql, Link } from "gatsby";
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
  padding-top: ${props => props.theme.typography.rhythm(9)};
`;

const Heading = styled.h1`
  margin: 0;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const LogoContainer = styled.div`
  left: 2.1rem;
  position: absolute;
  top: -16px;
`;

const BlogDate = styled.p`
  opacity: 0.6;
  font-size: ${props => props.theme.typography.scale(-0.3).fontSize};
  margin: ${props => props.theme.typography.rhythm(1 / 3)} 0 0 0;
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

      <LogoContainer>
        <Link to="/">
          <Logo size={170} />
        </Link>
      </LogoContainer>

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

    towersImage: file(relativePath: { eq: "towers2.png" }) {
      childImageSharp {
        fixed(width: 260) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default BlogPost;
