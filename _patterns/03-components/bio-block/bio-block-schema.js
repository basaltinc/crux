module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Bio Block',
  description: "Show a person's bio.",
  properties: {
    name: {
      title: 'Name',
      type: 'string',
    },
    role: {
      title: 'Role',
      type: 'string',
      description: 'Job Title / Role',
    },
    img: {
      title: 'Image Source',
      type: 'string',
    },
    twitter: {
      title: 'Twitter Handle',
      type: 'string',
      description: 'Twitter Handle. Do not include the @ sign',
    },
  },
};
