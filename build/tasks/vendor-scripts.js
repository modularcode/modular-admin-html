var config = require('../config');

module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.scripts)
		.pipe(plugins.concat('vendor.js'))
		.pipe(gulp.dest(config.destDir + "/js"));
};