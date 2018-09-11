const schema = require('./exec-bio-schema.js');

const uiSchema = {
  bio: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 15
    }
  }
}

const meta = {
  id: 'exec-bio',
  title: 'Executive Bio',
  type: 'component',
  description:
    'The Executive Bio a UI component designed to profile members of the executive team.',
  uses: ['inSlice'],
  templates: [
    {
      name: '@components/_exec-bio.twig',
      selector: '.exec-bio',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
