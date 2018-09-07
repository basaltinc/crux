import React from 'react';
import { BedrockContextConsumer } from '@basalt/bedrock-core';
import {
  HomeSplashCore,
  EyeBrow,
  HomeSplashWrapper,
  Subtitle,
  Title,
  VersionTag,
} from './home-splash.styles';

const HomeSplash = () => (
  <BedrockContextConsumer>
    {({ settings }) => (
      <HomeSplashWrapper>
        <HomeSplashCore>
          {settings.site.subtitle && (
            <EyeBrow>{settings.site.subtitle}</EyeBrow>
          )}
          <Title>{settings.site.title}</Title>
          {settings.site.slogan && <Subtitle>{settings.site.slogan}</Subtitle>}
          {settings.site.version && (
            <VersionTag>{settings.site.version}</VersionTag>
          )}
        </HomeSplashCore>
      </HomeSplashWrapper>
    )}
  </BedrockContextConsumer>
);

export default HomeSplash;
