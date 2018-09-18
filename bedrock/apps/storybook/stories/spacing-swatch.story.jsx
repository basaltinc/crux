import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SpacingSwatch from '@basalt/bedrock-spacing-swatch';

storiesOf('SpacingSwatch', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <SpacingSwatch
      spaces={[
        {
          name: '$spacing--xs',
          value: '.5rem',
          comment: '',
        },
        {
          name: '$spacing--s',
          value: '.75rem',
          comment: '',
        },
        {
          name: '$spacing--m',
          value: '1rem',
          comment: '',
        },
        {
          name: '$spacing--l',
          value: '1.5rem',
          comment: '',
        },
        {
          name: '$spacing--xl',
          value: '2rem',
          comment: '',
        },
        {
          name: '$spacing--xxl',
          value: '3.3rem',
          comment: '',
        },
        {
          name: '$spacing--xxxl',
          value: '5rem',
          comment: '',
        },
      ]}
    />
  )),
);
