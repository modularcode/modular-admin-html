const gulp  = require('gulp');
const plugins = require('gulp-load-plugins')();

const config = require('../config');
const paths = require('./paths');

module.exports = function() {
  return gulp.src(paths.scripts)
    .pipe(plugins.babel({
      "presets": [
        ["env", {
          "targets": {
            "browsers": ["last 2 versions", "safari >= 7"]
          }
        }]
      ]
    }))
    .pipe(plugins.concat('bundle.js'))
    .pipe(gulp.dest(config.DIST_DIR + '/js'));
};
