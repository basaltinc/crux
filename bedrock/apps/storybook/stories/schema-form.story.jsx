import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SchemaForm from '@basalt/bedrock-schema-form';
import { boolean } from '@storybook/addon-knobs';

function schemaFormDemo(data) {
  return (
    <div>
      <SchemaForm {...data} />
      <details>
        <summary>JSON Data</summary>
        <pre>
          <code>{JSON.stringify(data, null, '  ')}</code>
        </pre>
      </details>
    </div>
  );
}

const basicSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Basic Schema',
  required: ['text'],
  properties: {
    text: {
      title: 'Text',
      type: 'string',
    },
    textarea: {
      title: 'Text Area',
      type: 'string',
      description: 'This is a text area, where you might write a lot of text.',
    },
    select: {
      title: 'Select',
      type: 'string',
      description: 'Select one of the options',
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
      description: 'Choose one option',
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
  required: ['required', 'requiredInfo'],
  properties: {
    text: {
      title: 'Text',
      type: 'string',
      description: 'Text',
    },
    required: {
      title: 'Required Text',
      type: 'string',
    },
    requiredInfo: {
      title: 'Required Text with Info',
      type: 'string',
      description: 'This field is both required, and has information.',
    },
    textarea: {
      title: 'Text Area',
      type: 'string',
      description: 'This is a text area, where you might write a lot of text.',
    },
    number: {
      title: 'Number',
      type: 'number',
      description: 'This is number input field.',
    },
    integer: {
      title: 'Integer;',
      type: 'integer',
      description: 'This is an integer input field.',
    },
    email: {
      title: 'Email',
      type: 'string',
      description: 'Email',
    },
    password: {
      title: 'Password',
      type: 'string',
      description: 'Choose a strong password',
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
      description: 'This field allows you to upload a file from your computer.',
    },
    date: {
      title: 'Date',
      type: 'string',
      description: 'Use your keyboard or mouse to select a date',
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
      type: 'object',
      properties: {
        option1: {
          title: 'Option 1',
          type: 'boolean',
        },
        option2: {
          title: 'Option 2',
          type: 'boolean',
        },
        option3: {
          title: 'Option 3',
          type: 'boolean',
        },
        option4: {
          title: 'Option 4',
          type: 'boolean',
        },
      },
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
    'ui:options': {
      inline: true,
    },
  },
};

const nestedSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Grandparent',
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
      source: false,
    })(() => {
      const isInline = boolean('isInline', true);
      const data = {
        schema: basicSchema,
        uiSchema: basicSchemaUi,
        isInline,
      };
      return schemaFormDemo(data);
    }),
  )
  .add(
    'Kitchen Sink Schema',
    withInfo({
      inline: true,
      source: false,
    })(() => {
      const isInline = boolean('isInline', false);
      const data = {
        schema: kitchenSinkSchema,
        uiSchema: kitchenSinkSchemaUi,
        isInline,
      };
      return schemaFormDemo(data);
    }),
  )
  .add(
    'Nested Schema',
    withInfo({
      inline: true,
      source: false,
    })(() => {
      const isInline = boolean('isInline', false);
      const data = {
        schema: nestedSchema,
        uiSchema: nestedSchemaUi,
        isInline,
      };
      return schemaFormDemo(data);
    }),
  );
