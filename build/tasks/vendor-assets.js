var config = require('../../config/');

module.exports.task = function(gulp, plugins, paths) {
	return function vendor_assets() {
		// Error: Invalid glob argument: []
		//	gulp.src(paths.vendor.assets)
		//		.pipe(gulp.dest(config.destDir + "/assets")),
		//		//.pipe(plugins.connect.reload())
		return gulp.src(paths.vendor.fonts)
				.pipe(gulp.dest(config.destDir + "/fonts"))
				.pipe(plugins.connect.reload())
	};
};