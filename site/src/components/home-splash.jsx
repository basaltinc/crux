import React from 'react';
import styled from 'styled-components';

const HomeSplashWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeSplashCore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  height: calc(100vh - 86px);
  max-width: 960px;
  padding: 2rem;
  text-align: right;
`;

const EyeBrow = styled.h2`
  color: grey;
  margin: 0 0 -125px;
  font-size: 2.52rem;
`;

const Title = styled.h1`
  font-size: 20rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  margin-top: -110px;
`;

const VersionTag = styled.p`
  margin-top: -20px;
`;

const HomeSplash = () => (
  <HomeSplashWrapper>
    <HomeSplashCore>
      <EyeBrow>Design System by Basalt</EyeBrow>
      <Title>Crux</Title>
      <Subtitle>Let Us Handle The Hard Part</Subtitle>
      <VersionTag>v0.1-alpha</VersionTag>
    </HomeSplashCore>
  </HomeSplashWrapper>
);

export default HomeSplash;
