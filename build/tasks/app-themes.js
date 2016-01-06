var path = require('path');
var config = require('../config');
var glob = require('glob');

module.exports.task = function(gulp, plugins, paths) {

	// For each theme file
	glob.sync(paths.app.themes).forEach(function(filePath) {

		// Prepend file to styles glob
		var src = [].concat(paths.app.styles);
			src.unshift(filePath);

		// Theme name 
		var name = "app-" + path.basename(filePath, '.js').replace("-theme", "");

		gulp.src(src)
			.pipe(plugins.concat(name))
			.pipe(
				plugins.sass({
					includePaths: [
						path.resolve( config.srcDir ),
						path.resolve( config.npmDir ),
						path.resolve( config.bowerDir ),
					]
				})
				.on('error', plugins.sass.logError)
			)
			.pipe(plugins.autoprefixer())
			.pipe(gulp.dest(config.destDir + '/css'));

	});

};

module.exports.deps = ['app-styles'];