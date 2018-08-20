const schema = require('./button-schema');

const meta = {
  id: 'button',
  title: 'Button',
  type: 'component',
  description: "Buttons are for clickin' and tappin'!",
  templates: [
    {
      name: '@components/_button.twig',
      selector: '.button',
      schema,
    },
  ],
  demoSize: 's',
};

module.exports = {
  meta,
};
