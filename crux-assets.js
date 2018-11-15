const { join } = require('path');
const {
  getTransitions,
  getBreakpoints,
  getColors,
  getSpacings,
  getTypography,
} = require('./data');
const { getExamples, getExample, setExample } = require('./data/examples');
const twigRenderer = require('./data/twig-renderer');

const paths = {
  patterns: [
    // join(__dirname, '_patterns/00-styleguide/*'),
    join(__dirname, '_patterns/02-layouts/*'),
    join(__dirname, '_patterns/03-components/*'),
    // join(__dirname, '_patterns/04-templates/*'),
  ],
  newPatternDir: join(__dirname, '_patterns/03-components/'),
  assetDir: join(__dirname, 'dist'),
  assets: {
    css: [join(__dirname, 'dist/crux.css')],
    js: [join(__dirname, 'dist/crux.js')],
  },
};

const designTokens = [
  {
    id: 'spacings',
    meta: {
      title: 'Spacings',
      description:
        'Visual spacing is key to creating a clean and usable interface. Correctly implemented – visual spacing provides elements with the ability to "breath" by intentionally emphasizing white space.',
    },
    get: getSpacings,
  },
  {
    id: 'colors',
    meta: {
      title: 'Colors',
      description:
        'Color is a defining element of any strong brand identity. We use color to express our brand, and to support or emphasize key messages within the interface.',
    },
    get: getColors,
  },
  {
    id: 'breakpoints',
    meta: {
      title: 'Breakpoints',
      description:
        'Breakpoints are the backbone of responsive design and provide us with the ability to effectively deliver layout within nearly any screen size or resolution.',
    },
    get: getBreakpoints,
  },
  {
    id: 'typography',
    meta: {
      title: 'Typography',
      description:
        'Typography is the voice of a brand. This set of typefaces best represent Basalt’s brand attributes and personality.',
    },
    get: getTypography,
  },
  {
    id: 'transitions',
    meta: {
      title: 'Transitions',
      description:
        'Animations are the "stylistic sugar" used to "sweeten" the user experience. Used sparingly – animations provide that extra touch the makes an interface sing.',
    },
    get: getTransitions,
  },
];

module.exports = {
  designTokens,
  twigRenderer,
  getExamples,
  getExample,
  setExample,
  paths,
};
