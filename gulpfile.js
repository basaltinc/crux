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
// gulp.task(webPackTasks.compile);

gulp.task('css', cssTasks.compile);

gulp.task('validate', gulp.series([
  cssTasks.validate,
]));

function copyFonts() {
  return gulp.src(['./fonts/**'])
    .pipe(gulp.dest('./build/assets/fonts'));
}

function copyImages() {
  return gulp.src(['./images/**'])
    .pipe(gulp.dest('./build/assets/images'));
}

// function copyPages() {
//   return gulp.src([
//     './index.html',
//   ])
//     .pipe(gulp.dest('./build'));
// }

gulp.task('assets', gulp.series([
  cssTasks.clean,
  iconTasks.clean,
  iconTasks.compile,
  cssTasks.compile,
  copyFonts,
  copyImages,
  webPackTasks.compile,
]));

gulp.task('compile', gulp.series([
  cssTasks.clean,
  iconTasks.clean,
  // end clean tasks
  scssToJsonTask,
  iconTasks.compile,
  gulp.parallel([
    copyFonts,
    copyImages,
    // copyPages,
    cssTasks.compile,
    cssTasks.docs,
    webPackTasks.compile,
  ]),
]));

gulp.task('default', gulp.series([
  'compile',
  gulp.parallel([
    cssTasks.watch,
    scssToJsonWatch,
    webPackTasks.watch,
    iconTasks.watch,
  ]),
]));
