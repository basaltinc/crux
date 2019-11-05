const buttonSchema = require('../../atoms/button/button-schema');

const {
  text,
  is_primary,
  extraClasses,
  link_alt,
  link_url,
  link_openNewTab
} = buttonSchema.properties;

const ctaSchema = {
  text,
  is_primary,
  extraClasses,
  link_alt,
  link_url,
  link_openNewTab
};

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Anchored Blurb',
  type: 'object',
  description: "Typically displayed in a hero banner, a header and paragraph combo box anchored by a left citrine bar.",
  // required: ['text'],
  properties: {
    header: {
      title: 'Header Text',
      type: 'string',
      description:
        'Larger header text.',
    },
    headingLevel: {
      title: 'Heading Level',
      type: 'number',
      default: 2,
      description:
        'Set the heading level (1-6) so that the heading fits properly in the dom header tree.'
    },
    body: {
      title: 'Body Text',
      type: 'string',
      description:
        'Paragraph text below the header.'
    },
    has_background: {
      title: 'Has Background',
      type: 'boolean',
      default: false,
      description:
        'Whether a semi-transparent dark background should be used.'
    },
    maxWidth: {
      title: 'Max Width (px)',
      type: 'number',
      default: 600
    },
    ctas: {
      title: 'Calls to Action',
      type: 'array',
      description: 'List of calls to action as link buttons.',
      items: {
        ...buttonSchema,
        properties: ctaSchema
      }
    },
    extraClasses: {
      title: 'Extra Classes',
      type: 'string'
    }
  }
};
