var config = require('../../config');

module.exports.task = function(gulp, plugins, paths) {
	return function app_assets() {
		return gulp.src(paths.app.assets)
			.pipe(gulp.dest(config.destDir + "/assets"))
			.pipe(plugins.connect.reload());
	};
};
