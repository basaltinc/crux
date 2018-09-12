const schema = require('./logo-schema');

const uiSchema = {
  size: {
    'ui:widget': 'radio',
  },
};

const meta = {
  id: 'logo',
  title: 'Logo',
  type: 'component',
  description: 'Logo',
  uses: ['inComponent'],
  templates: [
    {
      name: '@components/_logo.twig',
      selector: '.logo',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'm',
};

module.exports = {
  meta,
};
