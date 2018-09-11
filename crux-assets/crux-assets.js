const BedrockPatternManifest = require('@basalt/bedrock-pattern-manifest');
const { join } = require('path');
const {
  getTransitions,
  getBreakpoints,
  getColors,
  getReleaseNotes,
  getSpacings,
  getFontFamilies,
  getFontSizes,
  getDeviceWidths,
} = require('./data');
const { getExamples, getExample, setExample } = require('./data/examples');
const twigRenderer = require('./data/twig-renderer');

const paths = {
  patterns: [
    join(__dirname, '_patterns/00-styleguide/*'),
    join(__dirname, '_patterns/02-layouts/*'),
    join(__dirname, '_patterns/03-components/*'),
    join(__dirname, '_patterns/04-templates/*'),
  ],
  assetDir: join(__dirname, 'dist'),
  assets: {
    css: [join(__dirname, 'dist/crux.css')],
    js: [join(__dirname, 'dist/crux.js')],
  },
};

const patternManifest = new BedrockPatternManifest({
  patternPaths: paths.patterns,
});

const designTokens = [
  {
    title: 'Spacings',
    id: 'spacings',
    // two ways to get it
    // a `get` function that doesn't cache results
    get: getSpacings,
    // a `data` object that is cached
    data: getSpacings(),
  },
  {
    title: 'Colors',
    id: 'colors',
    get: getColors,
    data: getColors(),
  },
  {
    title: 'Breakpoints',
    id: 'breakpoints',
    get: getBreakpoints,
    data: getBreakpoints(),
  },
  {
    id: 'devicewidths',
    get: getDeviceWidths,
    data: getDeviceWidths(),
  },
  {
    id: 'font-sizes',
    get: getFontSizes,
    data: getFontSizes(),
  },
  {
    id: 'font-families',
    get: getFontFamilies,
    data: getFontFamilies(),
  },
  {
    title: 'Animations',
    id: 'transitions',
    get: getTransitions,
    data: getTransitions(),
  },
  {
    id: 'releasenotes',
    get: getReleaseNotes,
    data: getReleaseNotes(),
  },
];

module.exports = {
  designTokens,
  twigRenderer,
  getPatternMeta: patternManifest.getPatternMeta,
  getPatterns: patternManifest.getPatterns,
  getExamples,
  getExample,
  setExample,
  paths,
  patternManifest,
};
