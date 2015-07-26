var assemble 	= require('assemble');
var plugins 	= require('gulp-load-plugins')();
var path 		= require('path');

/********************************************
*			Configs And Paths
*********************************************/

var config = require('./config');

var paths = {
	app: 	require('./paths-app'),
	vendor: require('./paths-vendor')
};



/********************************************
*			Assemble Tasks
********************************************/

assemble.partials(paths.app.partials.src);
assemble.layouts(paths.app.layouts.src);


assemble.task('pages', function() {

	console.dir(assemble.views.layouts);	

	assemble
		.src(paths.app.pages.src, {
			layout: 'app-layout'
		})
		.pipe(plugins.flatten())
		.pipe(plugins.rename(function (path) {
			path.basename = path.basename.replace("-page", "");
			path.extname = ".html"
		}))
		.pipe(assemble.dest(paths.app.pages.dest));
});



assemble.task('build', [
	// 'scripts', 
	// 'styles', 
	// 'pages',
	'pages',
	// 'assets'
]);

// Run this task for development
assemble.task('develop', [
	'build',
	// 'watch', 
	// 'connect'
]);


assemble.task('default', ['develop']);