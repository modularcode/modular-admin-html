module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.assets.src)
		.pipe(gulp.dest(paths.vendor.assets.dest));
};