module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Button',
  type: 'object',
  description: "Trigger an action.",
  required: ['text'],
  properties: {
    text: {
      title: 'Button Text',
      type: 'string',
      description:
        'The text that displays in the button.',
    },
    is_primary: {
      title: 'Is Primary',
      type: 'boolean',
      description:
        'Used to indicate the next logical progressive action or as a call to action.',
    },
    is_block: {
      title: 'Is Block',
      type: 'boolean',
      description:
        'Sets the button as a full width block level element.',
    },
    type: {
      title: 'Type',
      type: 'string',
      enum: ['button', 'submit'],
      enumNames: ['Button', 'Submit'],
      default: 'button',
    },
    id: {
      title: 'ID',
      type: 'string',
      description:
        'A unique camelcase ID, used for javascript hooks.'
    },
    is_link: {
      title: 'Is Link',
      type: 'boolean',
      description:
        'Whether this button is used as a link and should use <a> tag markup.',
    },
    link_url: {
      title: 'Link URL',
      type: 'string',
      description:
        'URL for a link button.',
    },
    link_alt: {
      title: 'Link Alt Text',
      type: 'string',
      description:
        'Alt text for a link button.'
    },
    extraClasses: {
      type: 'string',
    },
  },
  examples: [
    {
      text: 'Standard Button',
    },
    {
      text: 'Primary Button',
      is_primary: true,
    },
    {
      text: 'Primary Link Button',
      is_primary: true,
      is_link: true,
      link_url: 'https://basalt.io/',
      link_alt: 'Website for Basalt',
    },
  ],
};
