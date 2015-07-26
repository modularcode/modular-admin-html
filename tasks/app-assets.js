module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.app.assets.src)
		.pipe(gulp.dest(paths.app.assets.dest));
};