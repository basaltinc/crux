import React from 'react';
import { configure, addDecorator } from '@storybook/react';

const req = require.context('../stories', true, /\.story\.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <div style={{ fontSize: '18px' }}>
    {story()}
  </div>
));

configure(loadStories, module);
