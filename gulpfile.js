'use strict';

const config = require('./config');
const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const scssToJson = require('scsstojson');
const cssTasks = require('@theme-tools/plugin-sass')(config.css);
const browserSyncTasks = require('@theme-tools/plugin-browser-sync')(config.browserSync);
const webPackTasks = require('@theme-tools/plugin-webpack')(require('./webpack.config'));
const iconTasks = require('@theme-tools/plugin-icon-font')(config.icons);
const patternLabTasks = require('@theme-tools/plugin-pattern-lab-php')({
  configFile: './pattern-lab/config/config.yml',
  watchedExtensions: [
    'twig',
    'json',
    'yaml',
    'yml',
    'md',
    'jpg',
    'jpeg',
    'png',
    'php',
  ],
  twigNamespaces: {
    sets: fs.readdirSync('./pattern-lab/source/_patterns/')
    .filter(item => fs.statSync(path.join('./pattern-lab/source/_patterns/', item)).isDirectory())
    .map((folder) => ({
      namespace: folder.replace(/[0-9]*-/, ''),
      paths: [path.join('./pattern-lab/source/_patterns/', folder)],
    })),
  },
});

function scssToJsonTask(done) {
  scssToJson(config.scssToJsonItems, {}, done);
}

function scssToJsonWatch() {
  gulp.watch(config.scssToJsonItems.map(item => item.src), scssToJsonTask);
}
// gulp.task(webPackTasks.compile);

gulp.task('css', cssTasks.compile);
gulp.task('serve', browserSyncTasks.serve);

gulp.task('validate', gulp.series([
  cssTasks.validate,
]));

function copyVendorJs() {
  return gulp.src([
    require.resolve('holderjs'),
  ])
    .pipe(gulp.dest('./build/assets'));
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
  webPackTasks.compile,
]));


gulp.task('pl', gulp.parallel([
  patternLabTasks.compile,
  copyVendorJs,
]));

gulp.task('compile', gulp.series([
  cssTasks.clean,
  iconTasks.clean,
  // end clean tasks
  scssToJsonTask,
  iconTasks.compile,
  gulp.parallel([
    patternLabTasks.compile,
    // copyPages,
    copyVendorJs,
    cssTasks.compile,
    cssTasks.docs,
    webPackTasks.compile,
  ]),
]));

gulp.task('default', gulp.series([
  'compile',
  gulp.parallel([
    browserSyncTasks.serve,
    patternLabTasks.watch,
    cssTasks.watch,
    scssToJsonWatch,
    webPackTasks.watch,
    iconTasks.watch,
  ]),
]));
