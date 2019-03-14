const { resolve } = require('path');

module.exports = {
  roots: [resolve(__dirname, './_patterns/03-components')],
  namespaces: [
    {
      id: 'components',
      recursive: true,
      paths: [resolve(__dirname, './_patterns/03-components')],
    },
    {
      id: 'styleguide',
      recursive: true,
      paths: ['./_patterns/00-styleguide/'],
    },
    {
      id: 'svgs',
      recursive: true,
      paths: ['./images/svgs/'],
    },
  ],
};
