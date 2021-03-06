import React from 'react';
import styled from 'react-emotion';

const Header = styled.header`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #193441;
  padding: 1rem 0;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0;
  padding: 0.5rem 0;
  color: white;

  font-family: Yrsa, sans-serif;

  text-transform: uppercase;

  @media only screen and (min-width: 400px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0.25rem 0;
  font-size: 28px;

  border-top: 2px solid #d1dbbd;
  font-family: Yrsa, sans-serif;
  color: #d1dbbd;

  @media only screen and (min-width: 768px) {
    font-size: 44px;
  }
`;

function HeaderComponent() {
  return (
    <Header>
      <Title>Maggie Alcorn</Title>
      <Subtitle>Auditor &amp; Financial Analyst</Subtitle>
    </Header>
  );
}

export { HeaderComponent as Header };
