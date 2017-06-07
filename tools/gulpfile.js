const glob = require('glob');
const path = require('path');

const gulp  = require('gulp');
const plugins = require('gulp-load-plugins')();


/********************************************
*            Configs and paths
*********************************************/

const config = require('../config');
const paths = require('./paths');

/********************************************
*                  Tasks
*********************************************/

const gulpTaskAssets = require('./gulp-task-assets');
const gulpTaskStyles = require('./gulp-task-styles');
const gulpTaskScripts = require('./gulp-task-scripts');
const gulpTaskTemplates = require('./gulp-task-templates');

gulp.task('assets', gulpTaskAssets);
gulp.task('styles', gulpTaskStyles);
gulp.task('scripts', gulpTaskScripts);
gulp.task('templates', gulpTaskTemplates);

gulp.task('watch', function() {
  plugins.watch([paths.pages, paths.partials, paths.helpers], function() {
      gulp.start('templates');
  });

  // When script changes recompile scripts
  plugins.watch(paths.scripts, function() {
      gulp.start('scripts');
  });

  // When style changes recompile styles
  plugins.watch(paths.styles.all, function() {
      gulp.start('styles');
  });
});

/********************************************
*               Main Tasks
*********************************************/

gulp.task('build', ['assets', 'styles', 'scripts', 'templates']);

gulp.task('dev', [
  'build',
  'watch',
  // 'connect'
]);

gulp.task('default', ['build']);
