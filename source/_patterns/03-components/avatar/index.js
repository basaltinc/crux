const schema = require('./avatar-schema.js');

const meta = {
  id: 'avatar',
  title: 'Avatar',
  type: 'component',
  description: "Show a person's profile picture.",
  templates: [
    {
      name: '@components/_avatar.twig',
      selector: '.avatar',
      schema,
    },
  ],
  demoSize: 's',
};

module.exports = {
  meta,
};
