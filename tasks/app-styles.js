var path = require('path');
var config = require('../config');

module.exports = function(gulp, plugins, paths) {

	gulp.src(paths.app.styles.src)
		.pipe(plugins.concat('app.less'))
		.pipe(plugins.less({
			paths: [ 
				path.resolve( config.srcDir ),
				path.resolve( config.bowerDir ),
			]
		}))
		.on('error', plugins.util.log)
		.pipe(plugins.autoprefixer())
		.pipe(gulp.dest(paths.app.styles.dest));
};