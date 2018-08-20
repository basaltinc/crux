'use strict';

const config = require('./config');
const gulp = require('gulp');
const scssToJson = require('scsstojson');
const cssTasks = require('@theme-tools/plugin-sass')(config.css);
const webPackTasks = require('@theme-tools/plugin-webpack')(require('./webpack.config'));
const iconTasks = require('@theme-tools/plugin-icon-font')(config.icons);

function scssToJsonTask(done) {
  scssToJson(config.scssToJsonItems, {}, done);
}

function scssToJsonWatch() {
  gulp.watch(config.scssToJsonItems.map(item => item.src), scssToJsonTask);
}

gulp.task('css', cssTasks.compile);

gulp.task('validate', gulp.series([
  cssTasks.validate,
]));

function copyFonts() {
  return gulp.src(['./fonts/**'])
    .pipe(gulp.dest('./dist/fonts'));
}

gulp.task('build', gulp.series([
  scssToJsonTask,
  iconTasks.compile,
  gulp.parallel([
    copyFonts,
    cssTasks.compile,
    cssTasks.docs,
    webPackTasks.compile,
  ]),
]));

gulp.task('default', gulp.series([
  'build',
  gulp.parallel([
    cssTasks.watch,
    scssToJsonWatch,
    webPackTasks.watch,
    iconTasks.watch,
  ]),
]));
