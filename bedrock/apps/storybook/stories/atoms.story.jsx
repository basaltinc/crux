import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Details, Select } from '@basalt/bedrock-atoms';
import { paragraph } from '@basalt/demo-data';

storiesOf('Atoms', module)
  .add(
    'Select',
    withInfo({
      inline: true,
    })(() => (
      <Select
        handleChange={action('option changed')}
        items={[
          {
            title: 'Option 1',
            value: 'option1',
          },
          {
            title: 'Option 2',
            value: 'option2',
          },
          {
            title: 'Option 3',
            value: 'option3',
          },
        ]}
      />
    )),
  )
  .add('Details', () => <Details>{paragraph()}</Details>);
