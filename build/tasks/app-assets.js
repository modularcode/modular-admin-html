var config = require('../config');

module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.app.assets)
		.pipe(gulp.dest(config.destDir + "/assets"));
};