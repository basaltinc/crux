import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SchemaForm from '@basalt/bedrock-schema-form';
import { boolean } from '@storybook/addon-knobs';

const basicSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Basic Schema ',
  description: 'Basic Schema Example',
  properties: {
    text: {
      title: 'Text',
      type: 'string',
      description: 'Text',
    },
    textarea: {
      title: 'Text Area',
      type: 'string',
      description: 'Text Area',
    },
    select: {
      title: 'Select',
      type: 'string',
      description: 'Select',
      default: 'option1',
      enum: ['option1', 'option1', 'superlongoptionnumberthree', 'option4'],
      enumNames: [
        'Option #1',
        'Option #2',
        'Super Super Super Long Option Number Three',
        'Option #4',
      ],
    },
    radio: {
      title: 'Radio',
      type: 'string',
      description: 'Radio',
      enum: ['small', 'medium', 'large', 'jumbo'],
      enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
    },
    boolean: {
      title: 'Boolean',
      type: 'boolean',
      description: 'Check me!',
    },
  },
};

const basicSchemaUi = {
  textarea: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 10,
    },
  },
  radio: {
    'ui:widget': 'radio',
  },
};

const kitchenSinkSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Kitchen Sink Schema',
  description: 'Kitchen Sink Schema Examples',
  properties: {
    text: {
      title: 'Text',
      type: 'string',
      description: 'Text',
    },
    textarea: {
      title: 'Text Area',
      type: 'string',
      description: 'Text Area',
    },
    email: {
      title: 'Email',
      type: 'string',
      description: 'Email',
    },
    password: {
      title: 'Password',
      type: 'string',
      description: 'Password',
    },
    url: {
      title: 'URL',
      type: 'string',
      description: 'URL',
    },
    dataUrl: {
      title: 'File Upload',
      type: 'string',
      format: 'data-url',
      description: 'Data URL',
    },
    date: {
      title: 'Date',
      type: 'string',
      description: 'Date',
    },
    dateTime: {
      title: 'Date & Time',
      type: 'string',
      description: 'Date & Time',
    },
    select: {
      title: 'Select',
      type: 'string',
      description: 'Select',
      default: 'option1',
      enum: ['option1', 'option1', 'superlongoptionnumberthree', 'option4'],
      enumNames: [
        'Option #1',
        'Option #2',
        'Super Super Super Long Option Number Three That Goes On Forever and Ever',
        'Option #4',
      ],
    },
    radio: {
      title: 'Radio',
      type: 'string',
      description: 'Radio',
      enum: ['small', 'medium', 'large', 'jumbo'],
      enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
    },
    boolean: {
      title: 'Boolean',
      type: 'boolean',
      description: 'Check me!',
    },
    color: {
      title: 'Color Picker',
      type: 'string',
      description: 'Color',
    },
    numberUpdown: {
      title: 'Number Up/Down',
      type: 'number',
      description: 'Number Up/Down',
    },
    numberRange: {
      title: 'Number Range',
      type: 'number',
      description: 'Number Range',
    },
    disabledSelect: {
      title: 'Disabled Select',
      type: 'string',
      description: 'Disabled Select',
      default: 'option1',
      enum: ['option1', 'option1', 'superlongoptionnumberthree', 'option4'],
      enumNames: [
        'Option #1',
        'Option #2',
        'Super Super Super Long Option Number Three That Goes On Forever and Ever',
        'Option #4',
      ],
    },
    disabledRadio: {
      title: 'Disabled Radio',
      type: 'string',
      description: 'Disabled Radio',
      enum: ['small', 'medium', 'large', 'jumbo'],
      enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
    },
    multipleChoices: {
      title: 'Multiple Choices',
      type: 'array',
      items: {
        type: 'string',
        enum: ['Option1', 'Option2', 'Option3', 'Option4'],
        enumNames: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      },
      uniqueItems: true,
    },
  },
};

const kitchenSinkSchemaUi = {
  textarea: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 6,
    },
  },
  email: {
    'ui:widget': 'email',
  },
  password: {
    'ui:widget': 'password',
  },
  url: {
    'ui:widget': 'uri',
  },
  date: {
    'ui:widget': 'date',
  },
  dateTime: {
    'ui:widget': 'date-time',
  },
  radio: {
    'ui:widget': 'radio',
  },
  color: {
    'ui:widget': 'color',
  },
  numberUpdown: {
    'ui:widget': 'updown',
  },
  numberRange: {
    'ui:widget': 'range',
  },
  disabledSelect: {
    'ui:disabled': true,
  },
  disabledRadio: {
    'ui:widget': 'radio',
    'ui:disabled': true,
  },
  multipleChoices: {
    'ui:widget': 'checkboxes',
    // 'ui:options': {
    //   inline: true,
    // },
  },
};

const nestedSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Grandparent',
  description: 'Grandparent',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Main heading of media block.',
    },
    firstChild: {
      type: 'array',
      title: 'Parent',
      description: 'Parent',
      items: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        title: 'Parent',
        description: '',
        properties: {
          text: {
            title: 'Text',
            type: 'string',
            description: 'Button Text',
          },
          secondChild: {
            type: 'array',
            title: 'Child',
            description: 'Child',
            items: {
              $schema: 'http://json-schema.org/draft-07/schema',
              type: 'object',
              title: 'Child',
              description: '',
              properties: {
                text: {
                  title: 'Text',
                  type: 'string',
                  description: 'Button Text',
                },
                radio: {
                  title: 'Radio',
                  type: 'string',
                  description: 'Radio',
                  enum: ['small', 'medium', 'large', 'jumbo'],
                  enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
                },
                thirdChild: {
                  type: 'array',
                  title: 'Grandchild',
                  description: 'Grandchild',
                  items: {
                    $schema: 'http://json-schema.org/draft-07/schema',
                    type: 'object',
                    title: 'Grandchild',
                    description: '',
                    properties: {
                      text: {
                        title: 'Text',
                        type: 'string',
                        description: 'Button Text',
                      },
                      select: {
                        title: 'Select',
                        type: 'string',
                        description: 'Select',
                        default: 'option1',
                        enum: [
                          'option1',
                          'option1',
                          'superlongoptionnumberthree',
                          'option4',
                        ],
                        enumNames: [
                          'Option #1',
                          'Option #2',
                          'Super Super Super Long Option Number Three That Goes On Forever and Ever',
                          'Option #4',
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const nestedSchemaUi = {};

storiesOf('Schema Form', module)
  .add(
    'Basic Schema',
    withInfo({
      inline: true,
    })(() => {
      const isInline = boolean('isInline', false);
      return (
        <SchemaForm
          schema={basicSchema}
          uiSchema={basicSchemaUi}
          isInline={isInline}
        />
      );
    }),
  )
  .add(
    'Kitchen Sink Schema',
    withInfo({
      inline: true,
    })(() => {
      const isInline = boolean('isInline', false);
      return (
        <SchemaForm
          schema={kitchenSinkSchema}
          uiSchema={kitchenSinkSchemaUi}
          isInline={isInline}
        />
      );
    }),
  )
  .add(
    'Nested Schema',
    withInfo({
      inline: true,
    })(() => {
      const isInline = boolean('isInline', false);
      return (
        <SchemaForm
          schema={nestedSchema}
          uiSchema={nestedSchemaUi}
          isInline={isInline}
        />
      );
    }),
  );

// storiesOf('Schema Form', module).add('Overview', () => {
//   const isInline = boolean('isInline', false);
//   return (
//     <SchemaForm
//       schema={dummyData}
//       uiSchema={{ radio: { 'ui:widget': 'radio' } }}
//       isInline={isInline}
//     />
//   );
// });
