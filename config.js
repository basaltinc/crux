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
          dest: 'pattern-lab/source/_patterns/00-styleguide/icons/_icons-settings.scss',
        },
        {
          src: 'images/icons/templates/icons.twig',
          dest: 'pattern-lab/source/_patterns/00-styleguide/icons/icons.twig',
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
      src: 'pattern-lab/source/_patterns/00-styleguide/05-colors/_color-vars.scss',
      dest: 'pattern-lab/source/_patterns/00-styleguide/05-colors/colors.json',
      lineStartsWith: '$c-',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-styleguide/15-typography/_fonts.scss',
      dest: 'pattern-lab/source/_patterns/00-styleguide/15-typography/font-sizes.json',
      lineStartsWith: '$fs--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-styleguide/15-typography/_fonts.scss',
      dest: 'pattern-lab/source/_patterns/00-styleguide/15-typography/01-typography-overview.json',
      lineStartsWith: '$ff--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-styleguide/00-breakpoints/_breakpoints.scss',
      dest: 'pattern-lab/source/_patterns/00-styleguide/breakpoints/breakpoints.json',
      lineStartsWith: '$bp--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-styleguide/10-spacing/_spacing.scss',
      dest: 'pattern-lab/source/_patterns/00-styleguide/10-spacing/spacing.json',
      lineStartsWith: '$spacing--',
      allowVarValues: false,
    },
    {
      src: 'pattern-lab/source/_patterns/00-styleguide/animations/01-transitions/_transitions.scss',
      dest: 'pattern-lab/source/_patterns/00-styleguide/animations/01-transitions/transitions.json',
      lineStartsWith: '$trans-',
      allowVarValues: true,
    },
  ],
};
