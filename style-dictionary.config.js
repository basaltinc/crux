#!/usr/bin/env node

const { styleDictionaryKnapsackFormat } = require('@basalt/knapsack');
const StyleDictionary = require('style-dictionary').extend({
  source: ['./_patterns/00-styleguide/**/*.{json,js}'],
  platforms: {
    scss: {
      prefix: 'token',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
      buildPath: './build/tokens/',
      files: [
        {
          destination: 'design-tokens.scss',
          format: 'scss/map-deep',
        },
      ],
    },
    js: {
      transforms: ['name/cti/camel'],
      buildPath: './build/tokens/',
      prefix: 'token',
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
      buildPath: './build/tokens/',
      prefix: 'token',
      files: [
        {
          destination: 'knapsack-design-tokens.json',
          format: 'knapsack',
        },
      ],
    },
  },
});

StyleDictionary.registerFormat(styleDictionaryKnapsackFormat);
StyleDictionary.buildAllPlatforms();
