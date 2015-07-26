module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.vendor.scripts.src)
		.pipe(plugins.concat('vendor.js'))
		.pipe(gulp.dest(paths.vendor.scripts.dest));
};