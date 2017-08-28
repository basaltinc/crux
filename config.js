module.exports = {
  css: {
    src: [
      'scss/**/*.scss',
      'pattern-lab/source/**/*.scss',
    ],
    dest: 'build/assets',
    lint: {
      enabled: true,
    },
    sassdoc: {
      enabled: true,
      dest: 'build/sassdoc',
    },
    includePaths: [
      './node_modules',
      '../../node_modules',
    ],
  },
  browserSync: {
    baseDir: './',
    startPath: 'build/pattern-lab',
  },
  icons: {
    src: 'images/icons/src/*.svg',
    dest: 'build/assets',
    templates: {
      enabled: true,
      sets: [
        {
          src: 'images/icons/templates/_icons-settings.scss',
          dest: 'pattern-lab/source/_patterns/01-atoms/images/_icons-settings.scss',
        },
        {
          src: 'images/icons/templates/icons.twig',
          dest: 'pattern-lab/source/_patterns/01-atoms/images/icons.twig',
        },
      ],
    },
  },
  js: {
    src: [
      'pattern-lab/source/**/*.js',
    ],
    dest: 'build/assets',
    destName: 'script.js',
    babelConfig: {
      presets: ['babel-preset-es2015'].map(require.resolve),
    },
  },
  scssToJsonItems: [
    {
      src: 'pattern-lab/source/_patterns/00-base/05-colors/_color-vars.scss',
      dest: 'pattern-lab/source/_patterns/00-base/05-colors/colors.json',
      lineStartsWith: '$c-',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-base/15-typography/fonts/_fonts.scss',
      dest: 'pattern-lab/source/_patterns/00-base/15-typography/fonts/font-sizes.json',
      lineStartsWith: '$fs--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-base/15-typography/fonts/_fonts.scss',
      dest: 'pattern-lab/source/_patterns/00-base/15-typography/fonts/font-families.json',
      lineStartsWith: '$ff--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-base/breakpoints/_breakpoints.scss',
      dest: 'pattern-lab/source/_patterns/00-base/breakpoints/breakpoints.json',
      lineStartsWith: '$bp--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-base/10-spacing/_spacing.scss',
      dest: 'pattern-lab/source/_patterns/00-base/10-spacing/spacing.json',
      lineStartsWith: '$spacing--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-base/animations/01-transitions/_transitions.scss',
      dest: 'pattern-lab/source/_patterns/00-base/animations/01-transitions/transitions.json',
      lineStartsWith: '$trans-',
      allowVarValues: true,
    },
  ],
};
