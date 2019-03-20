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
    color: {
      title: 'Background Color',
      description: 'Background color of button.',
      type: 'string',
      default: 'green',
      enum: [
        'blue',
        'green',
        'iron',
      ],
      enumNames: [
        'Blue',
        'Green',
        'Iron',
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
      text: 'Check it Out',
      url: 'http://www.basalt.io',
      size: 'small',
      color: 'iron',
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
