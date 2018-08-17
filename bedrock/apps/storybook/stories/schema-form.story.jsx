import React from 'react';
import { storiesOf } from '@storybook/react';
import SchemaForm from '@basalt/bedrock-schema-form';

const dummyData = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Schema Form Example',
  description: 'Sample Schema for demo of React Json Schema Form Styling.',
  properties: {
    title: {
      title: 'String',
      type: 'string',
      description: 'Description of a string.',
    },
    boolean: {
      title: 'Boolean',
      type: 'boolean',
      description: 'Description of a boolean.',
    },
    string_enum: {
      title: 'String w/ Enum',
      type: 'string',
      description: 'Enum and EnumNames defines the allowed string values',
      enum: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      enumNames: [
        'Top Left',
        'Top Center',
        'Top Right',
        'Bottom Left',
        'Bottom Center',
        'Bottom Right',
      ],
    },
    string_enum_two: {
      title: 'String Enum Two',
      type: 'string',
      enum: ['left', 'right', 'top', 'bottom'],
      enumNames: ['Left', 'Right', 'Top', 'Bottom'],
    },
    radio: {
      title: 'String Enum as Radio',
      type: 'string',
      enum: ['left', 'right', 'top', 'bottom'],
      enumNames: ['Left', 'Right', 'Top', 'Bottom'],
      'ui:widget': 'radio',
    },
  },
};

storiesOf('Schema Form', module).add('Overview', () => (
  <SchemaForm
    schema={dummyData}
    uiSchema={{ radio: { 'ui:widget': 'radio' } }}
  />
));
