var config = require('../config');

module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.assets)
		.pipe(gulp.dest(config.destDir + "/assets"));

	gulp.src(paths.vendor.fonts)
		.pipe(gulp.dest(config.destDir + "/fonts"));
};