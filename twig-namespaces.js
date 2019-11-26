const { resolve } = require('path');

module.exports = {
  roots: [resolve(__dirname, './_patterns')],
  namespaces: [
    {
      id: 'atoms',
      recursive: false,
      paths: [resolve(__dirname, './_patterns/atoms')],
    },
    {
      id: 'molecules',
      recursive: false,
      paths: [resolve(__dirname, './_patterns/molecules')],
    },
    {
      id: 'organisms',
      recursive: false,
      paths: [resolve(__dirname, './_patterns/organisms')],
    },
    {
      id: 'layouts',
      recursive: false,
      paths: [resolve(__dirname, './_patterns/layouts')],
    }
  ],
};
