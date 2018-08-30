module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'List',
  description: 'List',
  properties: {
    list_items: {
      title: 'List Items',
      type: 'array',
      description: 'Array of strings of list of items',
      items: {
        type: 'object',
        title: 'list item',
        properties: {
          text: {
            type: 'string',
            title: 'text',
          }
        }
      }
    },
    text_size: {
      title: 'Text Size',
      type: 'string',
      enum: ['xs', 's', 'm', 'l', 'xl'],
      enumNames: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
    },
    bullets: {
      title: 'Bullets',
      type: 'boolean',
      description: 'Display bullets next to list items',
    },
    ordered: {
      title: 'Ordered',
      type: 'boolean',
      description: 'Display ordered numbers next to list items',
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
      list_items: [
        {text: 'JSON'},
        {text:'React'},
        {text:'Arrays'},
        {text:'If Statements'},
        {text:'Math'},
        {text:'Logic'},
        {text:'Jokes'},
        {text:'Interent'},
        {text:'Sorcery'},
      ],
      text_size: 'xl',
      bullets: false,
      ordered: true,
      columns: '3',
    },
    {
      list_items: [
        {text: 'JSON'},
        {text: 'React'},
        {text: 'Arrays'},
        {text: 'If Statements'},
        {text: 'Math'},
      ],
      text_size: 'm',
      bullets: false,
      ordered: false,
      columns: '1',
    },
  ],
};
