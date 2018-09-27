import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BreakpointsChart from '@basalt/bedrock-breakpoints-chart';

storiesOf('Breakpoints', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <BreakpointsChart
      breakpoints={[
        {
          name: '$bp--xsmall',
          value: '380px',
          comment: '',
        },
        {
          name: '$bp--small',
          value: '450px',
          comment: '',
        },
        {
          name: '$bp--medium',
          value: '700px',
          comment: '',
        },
        {
          name: '$bp--large',
          value: '900px',
          comment: '',
        },
        {
          name: '$bp--xlarge',
          value: '1100px',
          comment: '',
        },
        {
          name: '$bp--xxlarge',
          value: '1300px',
          comment: '',
        },
        {
          name: '$bp--xxxlarge',
          value: '1600px',
          comment: '',
        },
      ]}
    />
  )),
);
