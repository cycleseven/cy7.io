import {
  darkSection,
  styled,
  Grid,
  Gutters,
  Logo,
  MaxWidth,
  Stack,
} from "@cy7/design-system";
import { Link, LinkType } from "@cy7/website/common";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Link {
  name: string;
  type: LinkType;
  url: string;
}

const FooterBlock = styled("footer", {
  backgroundColor: "$bg",
  padding: "$2 0",
});

const FooterLink = styled(Link, {
  fontSize: "0.9rem",
});

const LogoLink = styled(Link, {
  display: "inline-block",

  "&:focus path": {
    fill: "$obsidian",
  },
});

const Heading = styled("h2", {
  color: "white",
  fontFamily: "$body",
  fontSize: "0.8rem",
  marginBottom: "$0-75",
  marginTop: 0,
  letterSpacing: "0.12ch",
});

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

function Footer(): React.ReactElement {
  const data = useStaticQuery(FOOTER_QUERY);
  const { metaLinks, socialLinks } = data.site.siteMetadata;

  return (
    <FooterBlock className={darkSection}>
      <Gutters>
        <MaxWidth>
          <Grid>
            <div>
              <LogoLink aria-label="Return to home" to="/" variant="borderless">
                <Logo />
              </LogoLink>
            </div>

            <div>
              <Heading>{socialLinks.name}</Heading>
              <Stack space="0-15">{renderLinks(socialLinks.links)}</Stack>
            </div>

            <div>
              <Heading>{metaLinks.name}</Heading>
              <Stack space="0-15">{renderLinks(metaLinks.links)}</Stack>
            </div>
          </Grid>
        </MaxWidth>
      </Gutters>
    </FooterBlock>
  );
}

export default Footer;
