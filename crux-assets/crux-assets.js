const BedrockPatternManifest = require('@basalt/bedrock-pattern-manifest');
const { join } = require('path');
const {
  getTransitions,
  getBreakpoints,
  getColors,
  getReleaseNotes,
  getSpacings,
  getTypography,
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
    get: getSpacings,
  },
  {
    title: 'Colors',
    id: 'colors',
    get: getColors,
  },
  {
    title: 'Breakpoints',
    id: 'breakpoints',
    get: getBreakpoints,
  },
  {
    title: 'Typography',
    id: 'typography',
    get: getTypography,
  },
  {
    title: 'Transitions',
    id: 'transitions',
    get: getTransitions,
  },
  // {
  //   id: 'releasenotes',
  //   get: getReleaseNotes,
  // },
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
