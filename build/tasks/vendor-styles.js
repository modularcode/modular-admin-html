var config = require('../config');
var path = require('path');

module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.styles)
		.pipe(plugins.concat('vendor.css'))
		.pipe(gulp.dest(config.destDir + "/css"));
};