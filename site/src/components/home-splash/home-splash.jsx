import React from 'react';
import {
  HomeSplashCore,
  EyeBrow,
  HomeSplashWrapper,
  Subtitle,
  Title,
  VersionTag,
} from './home-splash.styles';

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
