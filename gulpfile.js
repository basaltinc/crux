'use strict';

const config = require('./config');
const gulp = require('gulp');
const scssToJson = require('scsstojson');
const cssTasks = require('@theme-tools/plugin-sass')(config.css);
const browserSyncTasks = require('@theme-tools/plugin-browser-sync')(config.browserSync);
const jsTasks = require('@theme-tools/plugin-js-concat-babel')(config.js);
// const iconTasks = require('@theme-tools/plugin-icon-font')(config.icons);
const patternLabTasks = require('@theme-tools/plugin-pattern-lab-php')({
  configFile: './pattern-lab/config/config.yml',
  twigNamespaces: {
    sets: [
      {
        namespace: 'base',
        paths: ['pattern-lab/source/_patterns/00-base'],
      }, {
        namespace: 'atoms',
        paths: ['pattern-lab/source/_patterns/01-atoms'],
      }, {
        namespace: 'molecules',
        paths: ['pattern-lab/source/_patterns/02-molecules'],
      }, {
        namespace: 'organisms',
        paths: ['pattern-lab/source/_patterns/03-organisms'],
      }, {
        namespace: 'templates',
        paths: ['pattern-lab/source/_patterns/04-templates'],
      }, {
        namespace: 'pages',
        paths: ['pattern-lab/source/_patterns/05-pages'],
      },
    ],
  },
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

gulp.task('compile', gulp.series([
  cssTasks.clean,
  jsTasks.clean,
  // iconTasks.clean,
  // end clean tasks
  scssToJsonTask,
  // iconTasks.compile,
  gulp.parallel([
    patternLabTasks.compile,
    // copyPages,
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
    // iconTasks.watch,
  ]),
]));
