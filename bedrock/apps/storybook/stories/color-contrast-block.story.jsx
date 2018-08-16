import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ColorContrastBlock from '@basalt/bedrock-color-contrast-block';

storiesOf('ColorContrastBlock', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <ColorContrastBlock
      bgColors={[
        {
          name: 'Blue',
          value: 'blue',
        },
        {
          name: 'Red',
          value: 'red',
        },
      ]},
      textColors={[

]}
    />
  )),
);
