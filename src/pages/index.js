import { Meta } from "@cy7/designSystem";
import Hero from "@cy7/home/Hero";
import React from "react";
import styled from "styled-components";

const Root = styled.div``;

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.typography.rhythm(1)};
`;

const Main = styled.main`
  margin: ${({ theme }) => theme.typography.rhythm(3)} auto;
  max-width: 65rem;
  padding: 0 ${({ theme }) => theme.typography.rhythm(1)};
`;

const Intro = styled.p`
  max-width: 23em;
`;

const HeroImage = styled(Hero)`
  max-width: 460px;
`;

function HomePage() {
  return (
    <Root>
      <Meta title="hi" />
      <Header>
        <HeroImage />
      </Header>
      <Main>
        <Intro>I&apos;m Owen, a web developer from Edinburgh, Scotland.</Intro>
        <Intro>
          Say hey on Github{" "}
          <a href="https://github.com/cycleseven">@cycleseven</a>
        </Intro>
      </Main>
    </Root>
  );
}

export default HomePage;
