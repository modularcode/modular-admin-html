module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.app.scripts.src)
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest(paths.app.scripts.dest));
};