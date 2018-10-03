import React from 'react';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import {
  HomeSplashCore,
  EyeBrow,
  HomeSplashWrapper,
  Subtitle,
  Title,
  VersionTag,
} from './homepage.styles';

const HomeSplash = ({ context }) => (
  <HomeSplashWrapper>
    <HomeSplashCore>
      {context.settings.site.subtitle && (
        <EyeBrow>{context.settings.site.subtitle}</EyeBrow>
      )}
      <Title>{context.settings.site.title}</Title>
      {context.settings.site.slogan && (
        <Subtitle>{context.settings.site.slogan}</Subtitle>
      )}
      {context.settings.site.version && (
        <VersionTag>{context.settings.site.version}</VersionTag>
      )}
    </HomeSplashCore>
  </HomeSplashWrapper>
);

HomeSplash.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(HomeSplash);
