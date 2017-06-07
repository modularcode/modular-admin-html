const gulp  = require('gulp');
const plugins = require('gulp-load-plugins')();
const path = require('path');

const config = require('../config');
const paths = require('./paths');

console.log(paths.styles.main);

module.exports = function() {

  return gulp.src(paths.styles.main)
    .pipe(
      plugins.sass({
        includePaths: [
          path.resolve( config.CLIENT_DIR ),
          path.resolve( config.NPM_DIR ),
        ]
      })
      .on('error', plugins.sass.logError)
    )
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(config.DIST_DIR + '/css'));

};
