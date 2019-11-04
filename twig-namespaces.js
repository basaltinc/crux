const { resolve } = require('path');

module.exports = {
  roots: [resolve(__dirname, './_patterns')],
  namespaces: [
    {
      id: 'atoms',
      recursive: false,
      paths: [resolve(__dirname, './_patterns/atoms')],
    },
  ],
};
