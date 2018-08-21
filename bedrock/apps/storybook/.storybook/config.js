import React from 'react';
import { configure, addDecorator } from '@storybook/react';
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
        <div style={{ fontSize: '18px' }}>
          {story()}
        </div>
      </ThemeProvider>
    )}
  </BedrockContextConsumer>
));

configure(loadStories, module);
