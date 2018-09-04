module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'List',
  description: 'List',
  properties: {
    items: {
      title: 'List Items',
      type: 'array',
      description: 'Items in the list',
      items: {
        type: 'object',
        title: 'List item',
        properties: {
          text: {
            title: 'Item Text',
            type: 'string',
            description: 'Item text',
          },
          url: {
            title: 'Url',
            type: 'string',
            description: 'Url of item link',
          },
        },
      },
    },
    text_size: {
      title: 'Text Size',
      type: 'string',
      enum: ['xs', 's', 'm', 'l', 'xl'],
      enumNames: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
    },
    display: {
      title: 'List Style',
      description: 'Display list as bulleted, ordered, or plain.',
      type: 'string',
      enum: ['bullets', 'ordered', 'plain'],
      enumNames: ['Bullets', 'Ordered List', 'None'],
    },
    text_color: {
      title: 'Text Color',
      type: 'string',
      description: 'Any utility color class',
    },
    columns: {
      title: 'Columns',
      type: 'string',
      enum: ['1', '2', '3', '4'],
      enumNames: ['1', '2', '3', '4'],
    },
  },
  examples: [
    {
      items: [
        { text: 'JSON' },
        { text: 'React' },
        { text: 'Arrays' },
        { text: 'If Statements' },
        { text: 'Math' },
        { text: 'Logic' },
        { text: 'Jokes' },
        { text: 'Interent' },
        { text: 'Sorcery' },
      ],
      text_size: 'xl',
      display: 'bullets',
      columns: '3',
    },
    {
      items: [
        { text: 'JSON' },
        { text: 'React' },
        { text: 'Arrays' },
        { text: 'If Statements' },
        { text: 'Math' },
      ],
      text_size: 'm',
      display: 'ordered',
      columns: '1',
    },
  ],
};
