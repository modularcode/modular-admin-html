module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.assets.src)
		.pipe(gulp.dest(paths.vendor.assets.dest));

	gulp.src(paths.vendor.fonts.src)
		.pipe(gulp.dest(paths.vendor.fonts.dest));
};