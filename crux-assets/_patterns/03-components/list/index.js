const schema = require('./list-schema');


const uiSchema = {
  display: {
    "ui:widget": "radio",
  },
  columns: {
    "ui:widget": "radio",
  }
}

const meta = {
  id: 'list',
  title: 'List',
  type: 'component',
  description: 'List',
  status: 'draft',
  uses: ['inSlice', 'inComponent', 'inGrid'],
  templates: [
    {
      name: '@components/_list.twig',
      selector: '.list',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'm',
};

module.exports = {
  meta,
};
