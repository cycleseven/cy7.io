import { Meta, rhythm, size } from "@cy7/designSystem";
import Hero from "@cy7/home/Hero";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  padding: 0 ${size("gutter")};
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: ${rhythm(3)} auto;
  max-width: 65rem;
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
