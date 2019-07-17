module.exports = {
  source: ['_patterns/00-styleguide/**/*.{json,js}'],
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
  },
};
