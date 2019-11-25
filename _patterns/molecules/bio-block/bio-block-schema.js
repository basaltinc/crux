module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Bio Block',
  type: 'object',
  description: 'Used for displaying a personal profile.',
  required: [''],
  properties: {
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of Peron Featured',
    },
    title: {
      title: 'Job Title',
      type: 'string',
    },
    twitter: {
      title: 'Twitter Handle',
      type: 'string',
      description: 'Twitter handle, not including the @.',
    },
    linkedin: {
      title: 'LinkedIn Usernrame',
      type: 'string',
      description: 'LinkedIn username.',
    },
    imageUrl: {
      title: 'Image URL',
      type: 'string',
    },
  },
};
