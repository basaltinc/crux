import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInputWrapper, Select } from '@basalt/bedrock-atoms';
import { action } from '@storybook/addon-actions';

storiesOf('Form Elements', module)
  .add('Select', () => (
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
  ))
  .add('Text Input', () => (
    <TextInputWrapper>
      <input placeholder="Type here..." />
    </TextInputWrapper>
  ))
  .add('Text Area Input', () => (
    <TextInputWrapper>
      <textarea placeholder="Type here..." />
    </TextInputWrapper>
  ));
  // .add('Text Area Input', () => <TextAreaInput placeholder="Type here..." />);
