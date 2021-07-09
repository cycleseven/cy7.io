import { ColorModeProvider, color, rhythm, fontStack } from "@cy7/designSystem";
import {
  darkSection,
  Grid,
  GutterBox,
  Logo,
  MaxWidth,
  Stack,
} from "@cy7/design-system";
import { Link, LinkType } from "@cy7/gatsby";
import { hslAdjust } from "@cy7/css";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

interface Link {
  name: string;
  type: LinkType;
  url: string;
}

const FooterBlock = styled.footer`
  background-color: ${color("bg")};
  padding: ${rhythm(2)} 0;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;

  &:focus {
    border: none;
    outline: ${({ theme }) => `solid 4px ${theme.colors.linkFocusBg}`};
  }

  &:hover:not(:focus) {
    color: ${({ theme }) =>
      hslAdjust(theme.palette.obsidian, { lightness: 0.92 })};
  }
`;

const LogoLink = styled(Link).attrs({ variant: "borderless" })`
  display: inline-block;

  &:focus path {
    fill: ${({ theme }) => theme.palette.obsidian};
  }
`;

const Heading = styled.h2`
  color: white;
  font-family: ${fontStack("body")};
  font-size: 0.8rem;
  letter-spacing: 0.12ch;
  margin-bottom: ${rhythm(0.75)};
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

function renderLinks(links: Link[]) {
  // The wrapping <div> is to lay out each <a> on a new line
  return links.map((link) => (
    <div key={link.name}>
      <FooterLink to={link.url} type={link.type}>
        {link.name}
      </FooterLink>
    </div>
  ));
}

function Footer(): JSX.Element {
  const data = useStaticQuery(FOOTER_QUERY);
  const { metaLinks, socialLinks } = data.site.siteMetadata;

  return (
    <ColorModeProvider mode="dark">
      <FooterBlock className={darkSection}>
        <GutterBox>
          <MaxWidth>
            <Grid>
              <div>
                <LogoLink aria-label="Return to home" to="/">
                  <Logo />
                </LogoLink>
              </div>

              <div>
                <Heading>{socialLinks.name}</Heading>
                <Stack space="0-15">{renderLinks(socialLinks.links)}</Stack>
              </div>

              <div>
                <Heading>{metaLinks.name}</Heading>
                {renderLinks(metaLinks.links)}
              </div>
            </Grid>
          </MaxWidth>
        </GutterBox>
      </FooterBlock>
    </ColorModeProvider>
  );
}

export { Footer };
