import { Logo, Meta } from "@cy7/designSystem";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Cy7PrismStyles } from "@cy7/blog";

const Article = styled.article`
  margin: auto;
  max-width: 36rem;
  padding: 0 1rem;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${props => props.theme.typography.rhythm(2)};
  margin-top: ${props => props.theme.typography.rhythm(6)};
`;

const Heading = styled.h1`
  margin: 0;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.theme.typography.rhythm(1)};
`;

const BlogDate = styled.p`
  opacity: 0.7;
  font-size: ${props => props.theme.typography.scale(-0.6).fontSize};
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: ${props => props.theme.typography.rhythm(1)};
  margin: ${props => props.theme.typography.rhythm(1 / 4)} 0 0 0;
  text-transform: uppercase;
`;

// There's not much gain to be had from maintaining prop type definitions for
// this component, because they're passed from Gatsby, it's not an interface
// defined by us. The component will break in an obvious way if the data prop
// is read incorrectly anyway.
/* eslint-disable react/prop-types */
const BlogPost = ({ data }) => {
  const blogPost = data.blogPost;
  const towersImage = data.towersImage.childImageSharp.fixed;

  return (
    <Article>
      <Meta title={blogPost.frontmatter.title} />
      <Cy7PrismStyles />

      <BackgroundImageContainer>
        <Img fadeIn={false} fixed={towersImage} loading="eager" />
      </BackgroundImageContainer>

      <LogoContainer>
        <Link aria-label="Return to home" to="/">
          <Logo size={84} variant="circular" />
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
/* eslint-enable */

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

    towersImage: file(relativePath: { eq: "tower.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default BlogPost;
