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
    link_openNewTab: {
      title: 'Open in New Tab',
      type: 'boolean',
      default: true,
      description:
        'Whether to open the link in a new tab or not.',
    },
    extraClasses: {
      type: 'string',
    },
  },
};
