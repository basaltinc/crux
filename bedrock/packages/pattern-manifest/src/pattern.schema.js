const meta = require('./pattern-meta.schema');
const templates = require('./pattern-templates.schema');

module.exports = {
  title: 'Pattern',
  type: 'object',
  required: ['id', 'meta', 'templates'],
  additionalProperties: false,
  properties: {
    id: {
      title: 'Id',
      type: 'string',
      description:
        "Identifying machine friendly name of pattern. Usually the 'Block' in 'BEM'.",
    },
    meta,
    templates,
  },
};
