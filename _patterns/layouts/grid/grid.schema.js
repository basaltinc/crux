const breakpointEnums = [
  '100',
  '50:50',
  '66:33',
  '33:66',
  '33:33:33',
  '25:75',
  '75:25',
  '25:50:25',
  '25:25:25:25',
];

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Grid',
  description: '',
  required: ['types', 'items'],
  properties: {
    types: {
      type: 'object',
      title: 'Grid Type',
      properties: {
        small: {
          type: 'string',
          title: 'Grid Type at Small',
          enum: ['100', '50:50'],
        },
        medium: {
          type: 'string',
          title: 'Grid Type at Medium',
          enum: breakpointEnums,
        },
        large: {
          type: 'string',
          title: 'Grid Type at Large',
          enum: breakpointEnums,
        },
      },
    },
    items: {
      type: 'array',
      title: 'Grid Items',
      description: 'Array of HTML strings',
      items: {
        type: 'string',
        title: 'Content',
        description: 'HTML string of content',
      },
    },
  },
};
