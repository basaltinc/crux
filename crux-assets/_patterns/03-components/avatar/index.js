const schema = require('./avatar-schema.js');

const uiSchema = {
  size: {
    'ui:widget': 'radio',
  },
};

const meta = {
  id: 'avatar',
  title: 'Avatar',
  type: 'component',
  description: "Show a person's profile picture.",
  uses: ['inComponent'],
  templates: [
    {
      name: '@components/_avatar.twig',
      selector: '.avatar',
      schema,
      uiSchema,
    },
  ],
  demoSize: 's',
};

module.exports = {
  meta,
};
