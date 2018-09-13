const schema = require('./button-schema');

const uiSchema = {
  size: {
    'ui:widget': 'radio',
  },
};

const meta = {
  id: 'button',
  title: 'Button',
  type: 'component',
  description: "Buttons are for clickin' and tappin'!",
  uses: ['inComponent'],
  templates: [
    {
      name: '@components/_button.twig',
      selector: '.button',
      schema,
      uiSchema,
      isInline: true,
    },
  ],
  demoSize: 's',
};

module.exports = {
  meta,
};
