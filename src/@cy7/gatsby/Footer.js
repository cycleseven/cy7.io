import {
  DarkModeProvider,
  Logo,
  MaxWidth,
  color,
  rhythm,
  GutterBox,
  fontStack
} from "@cy7/designSystem";
import { Link } from "@cy7/gatsby";
import { hslAdjust } from "@cy7/css";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  gap: ${rhythm(2)};

  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-gap: ${rhythm(1)} ${rhythm(2)};
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterBlock = styled.footer`
  background-color: ${color("paper")};
  padding: ${rhythm(2)} 0;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;

  &:focus {
    border: none;
    outline: ${({ theme }) => `solid 4px ${theme.colors.dijon}`};
  }

  &:hover:not(:focus) {
    color: ${({ theme }) =>
      hslAdjust(theme.colors.obsidian, { lightness: 0.92 })};
  }
`;

const LogoLink = styled(Link).attrs({ appearance: "image" })`
  display: inline-block;

  &:focus path {
    fill: ${({ theme }) => theme.colors.obsidian};
  }
`;

const Heading = styled.h2`
  color: white;
  font-family: ${fontStack("body")};
  font-size: 0.8rem;
  letter-spacing: 0.12ch;
  margin-bottom: ${rhythm(0.5)};
  margin-top: 0;
`;

const FOOTER_QUERY = graphql`
  query footer {
    site {
      siteMetadata {
        socialLinks {
          name
          links {
            name
            type
            url
          }
        }
        metaLinks {
          name
          links {
            name
            type
            url
          }
        }
      }
    }
  }
`;

function renderLinks(links) {
  // The wrapping <div> is to lay out each <a> on a new line
  return links.map(link => (
    <div key={link.name}>
      <FooterLink to={link.url} type={link.type}>
        {link.name}
      </FooterLink>
    </div>
  ));
}

function Footer() {
  const data = useStaticQuery(FOOTER_QUERY);
  const { metaLinks, socialLinks } = data.site.siteMetadata;

  return (
    <DarkModeProvider>
      <FooterBlock>
        <GutterBox>
          <MaxWidth>
            <Columns>
              <div>
                <LogoLink to="/">
                  <Logo />
                </LogoLink>
              </div>

              <div>
                <Heading>{socialLinks.name}</Heading>
                {renderLinks(socialLinks.links)}
              </div>

              <div>
                <Heading>{metaLinks.name}</Heading>
                {renderLinks(metaLinks.links)}
              </div>
            </Columns>
          </MaxWidth>
        </GutterBox>
      </FooterBlock>
    </DarkModeProvider>
  );
}

export { Footer };
