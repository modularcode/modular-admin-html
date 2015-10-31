var config = require('../config');
var path = require('path');

module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.styles.src)
		.pipe(plugins.concat('vendor.css'))
		.on('error', plugins.util.log)
		.pipe(gulp.dest(paths.vendor.styles.dest));
};