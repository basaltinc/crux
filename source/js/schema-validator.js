import { Validator } from 'jsonschema';

const v = new Validator();

const buttonSchema = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    text: { type: 'string' },
    url: { type: 'string' },
    size: {
      type: 'string',
      enum: ['small', 'large'],
    },
    color: {
      type: 'string',
      enum: ['yellow'],
    },
  },
  required: ['text', 'url'],
};

const sample = {
  text: 'harum voluptatem',
  url: '#',
  size: 'large',
  classes: ['button', '', 'button--size-large'],
};

export default function() {
  console.log(v.validate(sample, buttonSchema)); // eslint-disable-line no-console
}
