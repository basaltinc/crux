const { styleDictionaryKnapsackFormat } = require('@basalt/knapsack');
const StyleDictionary = require('style-dictionary');
const template = require('lodash.template');
const { readFileSync } = require('fs');
const { join } = require('path');
const { tokens } = require('./paths');

const source = [tokens.src];
const buildPath = tokens.dist;
const prefix = 'crux';

StyleDictionary.registerFormat(styleDictionaryKnapsackFormat);

StyleDictionary.registerFormat({
  name: 'custom-sass-map-flat',
  formatter: template(
    readFileSync(
      join(__dirname, './scripts/style-dictionary/sass-map-flat.template'),
    ),
  ),
});

StyleDictionary.registerTransform({
  name: 'animate/duration',
  type: 'value',
  matcher: ({ attributes }) =>
    attributes.category === 'animate' && attributes.type === 'duration',
  transformer: prop => {
    // Note the use of prop.original.value,
    // before any transforms are performed, the build system
    // clones the original property to the 'original' attribute.
    const value = (parseInt(prop.original.value, 10) / 1000).toString();
    return `${value}s`;
  },
});

module.exports = {
  source,
  platforms: {
    scss: {
      prefix,
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'animate/duration',
        'content/icon',
        'color/css',
      ],
      buildPath,
      files: [
        {
          destination: 'design-tokens.scss',
          format: 'scss/map-deep',
        },
        {
          destination: 'colors.scss',
          format: 'custom-sass-map-flat',
          filter: prop => prop.attributes.category === 'color',
          options: {
            mapVarName: 'tokens-color',
          },
        },
      ],
    },
    js: {
      transforms: ['name/cti/camel'],
      buildPath,
      prefix,
      files: [
        {
          destination: 'design-tokens.json',
          format: 'json/flat',
        },
        {
          destination: 'design-tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
    knapsack: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath,
      prefix,
      files: [
        {
          destination: 'knapsack-design-tokens.json',
          format: 'knapsack',
        },
      ],
    },
  },
};
