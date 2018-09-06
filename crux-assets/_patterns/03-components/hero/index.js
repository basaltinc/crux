const schema = require('./hero-schema');

const uiSchema = {
  alignment_all: {
    "ui:widget": "radio",
  }
}

const meta = {
  id: 'hero',
  title: 'Hero',
  type: 'component',
  description:
    'The Hero component is a full width slab intended to draw the attention of the user.',
  uses: ['inSlice'],
  templates: [
    {
      name: '@components/_hero.twig',
      selector: '.hero',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'full',
};

module.exports = {
  meta,
};
