const { image, paragraph, title } = require('@basalt/demo-data');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Smart Grid',
  description: 'A not-dumb grid',
  properties: {
    rowItems: {
      title: 'Row Items',
      description: 'How many items are in each row at particular screen widths',
      type: 'object',
      additionalProperties: false,
      properties: {
        small: {
          type: 'integer',
          title: 'Small',
          description: 'Items across at small width',
        },
        medium: {
          type: 'integer',
          title: 'Medium',
          description: 'Items across at medium width',
        },
        large: {
          type: 'integer',
          title: 'Large',
          description: 'Items across at large width',
        },
        xlarge: {
          type: 'integer',
          title: 'Extra Large',
          description: 'Items across at xlarge width',
        },
      },
    },
  },
  examples: [
    {
      demoItems: '12',
      rowItems: {
        small: '2',
        medium: '3',
        large: '4',
        xlarge: '6',
      },
    },
  ],
};
