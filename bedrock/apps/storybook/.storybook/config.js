import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  BedrockContextProvider,
  BedrockContextConsumer,
} from '@basalt/bedrock-core';
import { ThemeProvider } from 'styled-components';

const req = require.context('../stories', true, /\.story\.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <BedrockContextConsumer>
    {({ theme }) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontSize: theme.fonts.sizes.m, maxWidth: 1100,}}>
          {story()}
        </div>
      </ThemeProvider>
    )}
  </BedrockContextConsumer>
));

addDecorator(withKnobs);

configure(loadStories, module);
