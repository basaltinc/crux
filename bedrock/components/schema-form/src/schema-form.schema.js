import { text, paragraph } from '@basalt/demo-data';

const examples = [
  {
    title: 'Component Schema Form',
    type: 'object',
    description:
      "This form is generated from a component's schema. This means that updates to the components (such as new fields) will become immediately aviable within the form. How neat is that?",
    required: ['text'],
    additionalProperties: false,
    properties: {
      text: {
        type: 'string',
        title: text(),
        description: paragraph(),
      },
      textTwo: {
        type: 'string',
        title: text(),
        default: 'Default Text',
      },
      textThree: {
        type: 'string',
        title: text(),
        default: 'Harry',
        enum: ['Harry', 'Hermione', 'Ron', 'Kreacher'],
        description: paragraph(),
      },
      backgroundColor: {
        type: 'string',
        title: text(),
        description: paragraph(),
        default: 'primary',
        enum: ['primary', 'secondary', 'white'],
      },
      stringsArray: {
        type: 'array',
        title: text(),
        description: 'This is an array of strings',
        items: {
          type: 'string',
          title: text(),
          description: paragraph(),
        },
      },
    },
  },
  {
    title: text(),
    type: 'object',
    description:
      'Super Awesome Component is not a real component. It is a dummy component for the purpose of demonstration. This is a dummy schema that does not describe a real component.',
    required: ['text'],
    additionalProperties: false,
    properties: {
      text: {
        type: 'string',
        title: text(),
        description: paragraph(),
      },
      textTwo: {
        type: 'string',
        title: text(),
        default: 'Default Text',
      },
      textThree: {
        type: 'string',
        title: text(),
        default: 'Harry',
        enum: ['Harry', 'Hermione', 'Ron', 'Kreacher'],
        description: paragraph(),
      },
      backgroundColor: {
        type: 'string',
        title: text(),
        description: paragraph(),
        default: 'primary',
        enum: ['primary', 'secondary', 'white'],
      },
      stringsArray: {
        type: 'array',
        title: text(),
        description: 'This is an array of strings',
        items: {
          type: 'string',
          title: text(),
          description:
            'A single string item that will be added to its parent array.',
        },
      },
    },
  },
];

export default {
  title: 'Schema Form',
  type: 'object',
  description:
    'The schema-form component takes a component schema and generates a form.',
  required: [],
  // additionalProperties: false,
  properties: {},
  examples,
};
