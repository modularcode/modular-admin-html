module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.styles.src)
		.pipe(plugins.concat('vendor.css'))
		.pipe(gulp.dest(paths.vendor.styles.dest));
};