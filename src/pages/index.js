import { Meta } from "@cy7/designSystem";
import heroImage from "images/hero.svg";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  padding: 0 ${({ theme }) => theme.typography.rhythm(1)};
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -19px;
`;

const HeroImage = styled.img`
  width: 460px;
`;

const Main = styled.main`
  margin: ${({ theme }) => theme.typography.rhythm(3)} auto;
  max-width: 65rem;
`;

const Intro = styled.p`
  max-width: 23em;
`;

function HomePage() {
  return (
    <Root>
      <Meta />
      <Header>
        {/* TODO: use gatsby-image instead, or add height attribute.
                  Jumping after load atm... */}
        <HeroImage alt="cy7.io" src={heroImage} />
      </Header>
      <Main>
        <Intro>I'm Owen, a web developer from Edinburgh, Scotland.</Intro>
        <Intro>
          Say hey on Github{" "}
          <a href="https://github.com/cycleseven">@cycleseven</a>
        </Intro>
      </Main>
    </Root>
  );
}

export default HomePage;
