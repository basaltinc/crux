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
  height: calc(100vh - 240px);
  max-width: 960px;
  padding: 2rem;
  text-align: right;
`;

const EyeBrow = styled.h2`
  color: grey;
  margin: 0 0 -70px;
  font-size: 1.5rem;
  @media screen and (min-width: 700px) {
    margin: 0 0 -93px;
    font-size: 1.75rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 0 -110px;
    font-size: 2.1rem;
  }
  @media screen and (min-width: 1250px) {
    margin: 0 0 -125px;
    font-size: 2.52rem;
  }
`;

const Title = styled.h1`
  font-size: 14rem;
  margin: 0;
  @media screen and (min-width: 700px) {
    font-size: 16rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 18rem;
  }
  @media screen and (min-width: 1250px) {
    font-size: 20rem;
  }
`;

const Subtitle = styled.h2`
  margin-top: -60px;
  font-size: 1.5rem;
  @media screen and (min-width: 700px) {
    margin-top: -80px;
    font-size: 1.75rem;
  }
  @media screen and (min-width: 1000px) {
    margin-top: -100px;
    font-size: 2rem;
  }
  @media screen and (min-width: 1250px) {
    font-size: 2.25rem;
    margin-top: -110px;
  }
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
