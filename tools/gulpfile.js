const glob = require('glob');
const path = require('path');

const gulp  = require('gulp');
const plugins = require('gulp-load-plugins')();


/********************************************
*            Configs and paths
*********************************************/

const config = require('../config');
const paths = config.paths;

/********************************************
*                  Tasks
*********************************************/

const gulpTaskHTML = require('./gulptask-html');

gulp.task('html', gulpTaskHTML);

gulp.task('html:watch', ['html'], function() {
  plugins.watch([paths.pages, paths.partials, paths.helpers], function() {
      gulp.start('html');
  });
});
