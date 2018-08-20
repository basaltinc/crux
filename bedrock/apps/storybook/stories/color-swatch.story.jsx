import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ColorSwatches from '@basalt/bedrock-color-swatch';

storiesOf('ColorSwatch', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <ColorSwatches
      colors={[
        {
          name: 'Blue',
          value: 'blue',
        },
        {
          name: 'Red',
          value: 'red',
        },
      ]}
    />
  )),
);
