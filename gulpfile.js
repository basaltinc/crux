'use strict';

const config = require('./config');
const gulp = require('gulp');
const scssToJson = require('scsstojson');
const cssTasks = require('@theme-tools/plugin-sass')(config.css);
const browserSyncTasks = require('@theme-tools/plugin-browser-sync')(config.browserSync);
const jsTasks = require('@theme-tools/plugin-js-concat-babel')(config.js);
const iconTasks = require('@theme-tools/plugin-icon-font')(config.icons);
const patternLabTasks = require('@theme-tools/plugin-pattern-lab-php')({
  configFile: './pattern-lab/config/config.yml',
});

function scssToJsonTask(done) {
  scssToJson(config.scssToJsonItems, {}, done);
}

function scssToJsonWatch() {
  gulp.watch(config.scssToJsonItems.map(item => item.src), scssToJsonTask);
}

gulp.task('css', cssTasks.compile);

gulp.task('pl', patternLabTasks.compile);

gulp.task('fix', jsTasks.fix);

gulp.task('validate', gulp.series([
  cssTasks.validate,
  jsTasks.validate,
]));

function copyVendorJs() {
  return gulp.src([
    './node_modules/holderjs/holder.js',
  ])
    .pipe(gulp.dest('./build/assets'));
}

gulp.task('compile', gulp.series([
  cssTasks.clean,
  jsTasks.clean,
  iconTasks.clean,
  // end clean tasks
  scssToJsonTask,
  iconTasks.compile,
  gulp.parallel([
    patternLabTasks.compile,
    copyVendorJs,
    cssTasks.compile,
    cssTasks.docs,
    jsTasks.compile,
  ]),
]));

gulp.task('default', gulp.series([
  'compile',
  gulp.parallel([
    browserSyncTasks.serve,
    patternLabTasks.watch,
    cssTasks.watch,
    jsTasks.watch,
    scssToJsonWatch,
    iconTasks.watch,
  ]),
]));
