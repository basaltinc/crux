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
    radio: {
      title: 'String Enum as Radio',
      type: 'string',
      enum: ['left', 'right', 'top', 'bottom'],
      enumNames: ['Left', 'Right', 'Top', 'Bottom'],
      'ui:widget': 'radio',
    },
    tags: {
      title: 'Tags',
      description: 'This is an array of strings',
      type: 'array',
      items: {
        title: 'Tag',
        description: 'A single tag',
        type: 'string',
      },
    },
    names: {
      title: 'Names',
      description: 'This is an array of objects',
      type: 'array',
      items: {
        title: 'Name',
        description: 'An object with first and last strings',
        type: 'object',
        properties: {
          first: {
            title: 'First Name',
            type: 'string',
            description: 'Name, the first.',
          },
          last: {
            title: 'Last Name',
            type: 'string',
            description: 'Name, the last.',
          },
        },
      },
    },
  },
};

storiesOf('Schema Form', module).add('Overview', () => (
  <SchemaForm
    schema={dummyData}
    uiSchema={{ radio: { 'ui:widget': 'radio' } }}
  />
));
