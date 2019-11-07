'use strict';

const gulp = require('gulp');

const cssTasks = require('@theme-tools/plugin-sass')({
  src: ['scss/**/*.scss', '_patterns/**/*.scss'],
  dest: 'public/build',
  lint: {
    enabled: false,
  },
  sassdoc: {
    enabled: false,
    dest: 'public/build/sassdoc',
  },
  includePaths: ['./node_modules', '../node_modules', '../../node_modules'],
});

const webPackTasks = require('@theme-tools/plugin-webpack')(
  require('./webpack.config'),
);

gulp.task('css', cssTasks.compile);

function copyFonts() {
  return gulp.src(['./fonts/**']).pipe(gulp.dest('./public/build/fonts'));
}

gulp.task(
  'build',
  gulp.parallel([
    copyFonts,
    cssTasks.compile,
    webPackTasks.compile,
  ]),
);

gulp.task(
  'default',
  gulp.series([
    'build',
    gulp.parallel([
      cssTasks.watch,
      webPackTasks.watch,
    ]),
  ]),
);
