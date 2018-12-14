const { text } = require('@basalt/demo-data');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Button',
  description: "Buttons are for clickin' and tappin'!",
  properties: {
    text: {
      title: 'Text',
      type: 'string',
      description: 'Button Text',
    },
    url: {
      title: 'Url',
      type: 'string',
      default: '#',
      description: 'Url or Href for button.',
    },
    size: {
      title: 'Size',
      type: 'string',
      description: 'Button Size',
      default: 'small',
      enum: ['small', 'medium', 'large', 'jumbo'],
      enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
    },
    color: {
      title: 'Background Color',
      description: 'Background color of button.',
      type: 'string',
      default: 'green',
      enum: [
        'blue',
        'blue--light',
        'green',
        'iron',
        'yellow',
        'white',
        'black',
      ],
      enumNames: [
        'Blue',
        'Light Blue',
        'Green',
        'Iron',
        'Yellow',
        'White',
        'Black',
      ],
    },
  },
  examples: [
    {
      text: 'Click Me!',
      url: 'http://www.basalt.io',
      size: 'large',
      color: 'blue',
    },
    {
      text: text(),
      url: 'http://www.basalt.io',
      size: 'small',
      color: 'blue--light',
    },
  ],
  dosAndDonts: [
    {
      items: [
        {
          image: '/images/dos-and-donts/buttons/buttons-dont.png',
          caption: 'use mismatched button sizes next to each other.',
          do: false,
        },
        {
          image: '/images/dos-and-donts/buttons/buttons-do.png',
          caption: 'use buttons of the same size.',
          do: true,
        },
      ],
    },
  ],
  required: ['text', 'url'],
};
