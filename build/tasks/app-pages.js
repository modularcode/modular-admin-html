var path 	= require('path');
var glob 	= require('glob');
var fs 		= require('fs');
var extend 	= require('util')._extend;

var config 	= require('../config');

module.exports.task = function(gulp, plugins, paths) {
	
	gulp.src(paths.app.pages.src)
		// Frontmatter
		.pipe(plugins.frontMatter())
		// handlebars compilation
		.pipe(plugins.hb({
			// Register all templates as partials
			partials: paths.app.templates.src,
			// Partials naming e.g. 'app/app-layout'
			parsePartialName: function (file) {
				return file.shortPath;
			},
			// Registering template helpers
			helpers:  paths.app.helpers.src,
			// Context data for each page file
			dataEach: function (context, file) {

				var contextExtended = extend(context, getPageContext(file));
					contextExtended = extend(contextExtended, file.frontMatter);

				return contextExtended;
			},
			// Remove cache every time for 'watch'
			bustCache: true
		}))

		// Handle errors
		.on('error', plugins.util.log)

		// Rename .page.hbs to .html
		.pipe(plugins.rename(function (path) {
			path.basename = path.basename.replace("-page", "");
			path.extname = ".html"
		}))
		
		// Flatten structure
		.pipe(plugins.flatten())

		// Output
		.pipe(gulp.dest(paths.app.pages.dest));
};


/********************************************
*				Utils
*********************************************/

/*
	This function returns context of current page 
	which is root context extended by all contexts untill
	current level context
*/


function getPageContext(file) {

	var context = {};

	var rootDir = path.resolve(config.srcDir);
	var pageDir = path.dirname(file.path);

	var contextPaths = [];

	// Start going up from page directory until root directory
	for (var activeDir = pageDir; activeDir.length >= rootDir.length; activeDir = path.resolve(activeDir, '../') ) {
		contextPaths.push(
			path.resolve(activeDir, 'context.js')
		);
	}

	// Reverse context, so the iteration will start from root level context
	contextPaths.reverse();


	contextPaths.map(function(filePath) {
		if (!fs.existsSync(filePath)) {
			return false;
		}

		var localContext = require(filePath);

		extend(context, localContext);
	});


	return context;
};