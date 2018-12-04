const schema = require('./avatar-schema.js');

module.exports = {
  id: 'avatar',
  templates: [
    {
      name: '@components/avatar.twig',
      schema,
    },
  ],
};
