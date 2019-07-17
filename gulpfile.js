'use strict';

const gulp = require('gulp');
// const scssToJson = require('scsstojson');
const cssTasks = require('@theme-tools/plugin-sass')({
  src: ['scss/**/*.scss', '_patterns/**/*.scss'],
  dest: 'public/build',
  lint: {
    enabled: false,
  },
  sassdoc: {
    enabled: true,
    dest: 'public/build/sassdoc',
  },
  includePaths: ['./node_modules', '../node_modules', '../../node_modules'],
});
const iconTasks = require('@theme-tools/plugin-icon-font')({
  src: 'images/icons/src/*.svg',
  dest: 'public/build',
  templates: {
    enabled: true,
    sets: [
      {
        src: 'images/icons/templates/_icons-settings.scss',
        dest: '_patterns/00-styleguide/icons/_icons-settings.scss',
      },
      {
        src: 'images/icons/templates/icons.twig',
        dest: '_patterns/00-styleguide/icons/icons.twig',
      },
    ],
  },
});
const webPackTasks = require('@theme-tools/plugin-webpack')(
  require('./webpack.config'),
);

// const scssToJsonItems = [
//   {
//     src: '_patterns/00-styleguide/05-colors/_color-vars.scss',
//     dest: '_patterns/00-styleguide/05-colors/colors.json',
//     lineStartsWith: '$c-',
//     allowVarValues: false,
//   },
//   {
//     src: '_patterns/00-styleguide/15-typography/_fonts.scss',
//     dest: '_patterns/00-styleguide/15-typography/font-sizes.json',
//     lineStartsWith: '$fs--',
//     allowVarValues: false,
//   },
//   {
//     // @deprecate this when we move away from pattern lab, left in for backward support until then
//     src: '_patterns/00-styleguide/15-typography/_fonts.scss',
//     dest: '_patterns/00-styleguide/15-typography/01-typography-overview.json',
//     lineStartsWith: '$ff--',
//     allowVarValues: false,
//   },
//   {
//     src: '_patterns/00-styleguide/15-typography/_fonts.scss',
//     dest: '_patterns/00-styleguide/15-typography/font-families.json',
//     lineStartsWith: '$ff--',
//     allowVarValues: false,
//   },
//   {
//     src: '_patterns/00-styleguide/00-breakpoints/_breakpoints.scss',
//     dest: '_patterns/00-styleguide/00-breakpoints/breakpoints.json',
//     lineStartsWith: '$bp--',
//     allowVarValues: false,
//   },
//   {
//     src: '_patterns/00-styleguide/10-spacing/_spacing.scss',
//     dest: '_patterns/00-styleguide/10-spacing/spacing.json',
//     lineStartsWith: '$spacing--',
//     allowVarValues: false,
//   },
//   {
//     src: '_patterns/00-styleguide/animations/01-transitions/_transitions.scss',
//     dest: '_patterns/00-styleguide/animations/01-transitions/transitions.json',
//     lineStartsWith: '$trans-',
//     allowVarValues: true,
//   },
// ];

// function scssToJsonTask(done) {
//   scssToJson(scssToJsonItems, {}, done);
// }

// function scssToJsonWatch() {
//   gulp.watch(scssToJsonItems.map(item => item.src), scssToJsonTask);
// }

gulp.task('css', cssTasks.compile);

// gulp.task('validate', gulp.series([cssTasks.validate]));

function copyFonts() {
  return gulp.src(['./fonts/**']).pipe(gulp.dest('./public/build/fonts'));
}

gulp.task(
  'build',
  gulp.series([
    // scssToJsonTask,
    iconTasks.compile,
    gulp.parallel([
      copyFonts,
      cssTasks.compile,
      cssTasks.docs,
      webPackTasks.compile,
    ]),
  ]),
);

gulp.task(
  'default',
  gulp.series([
    'build',
    gulp.parallel([
      cssTasks.watch,
      // scssToJsonWatch,
      webPackTasks.watch,
      iconTasks.watch,
    ]),
  ]),
);
