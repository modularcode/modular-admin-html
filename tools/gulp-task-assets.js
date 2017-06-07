const gulp  = require('gulp');
const plugins = require('gulp-load-plugins')();

const config = require('../config');
const paths = require('./paths');

module.exports = function() {
  gulp.src(paths.assets)
    .pipe(gulp.dest(config.DIST_DIR + "/assets"));
};
