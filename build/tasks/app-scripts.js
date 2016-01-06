var config = require('../config');

module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.app.scripts)
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest(config.destDir + '/js'));
};