module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.app.styles.src)
		.pipe(plugins.concat('app.less'))
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer())
		.pipe(gulp.dest(paths.app.styles.dest));
};