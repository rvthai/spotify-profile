import React from "react";
import styled from "styled-components";

// Components
import Range from "components/Range";

// Styles
import { Main, Section, Header } from "styles";

const HeaderA = styled(Header)`
  border: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  margin: 0;
`;

function TopGenres(props) {
  return (
    <Main>
      <Section>
        <HeaderA>
          <Title>Top Genres</Title>
          <Range />
        </HeaderA>
      </Section>
    </Main>
  );
}

export default TopGenres;
