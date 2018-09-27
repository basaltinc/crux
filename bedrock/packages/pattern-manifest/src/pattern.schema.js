const templates = require('./pattern-templates.schema');

module.exports = {
  title: 'Pattern',
  type: 'object',
  required: ['id', 'metaFilePath', 'templates'],
  additionalProperties: false,
  properties: {
    id: {
      title: 'Id',
      type: 'string',
      description:
        "Identifying machine friendly name of pattern. Usually the 'Block' in 'BEM'.",
    },
    metaFilePath: {
      type: 'string',
      description:
        'Relative path to a JSON file that stores meta data for pattern. Schema for that file is in "pattern-meta.schema.json".',
    },
    templates,
  },
};
