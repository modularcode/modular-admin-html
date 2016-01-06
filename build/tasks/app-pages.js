var path 	= require('path');
var glob 	= require('glob');
var fs 		= require('fs-extra');
var through = require('through2');
var extend 	= require('util')._extend;

var config 	= require('../config');

module.exports.task = function(gulp, plugins, paths) {

	// Handlebars engine
	var handlebars = new require('handlebars');
	var handlebarsRegistrar = require('handlebars-registrar');

	// Register handlebars engine helpers and partials
	handlebarsRegistrar(handlebars, {
		helpers: paths.app.helpers,
		partials: paths.app.templates,
		parsePartialName: function (file) {
			return file.shortPath;
		},
	});

	gulp.src(paths.app.pages)
		// Frontmatter
		.pipe(plugins.frontMatter())
		// Render pages
		.pipe(through.obj(function (file, enc, cb) {
			// Page render result
			var pageRes = "";

			// Get context from _context.js files and frontmatter
			var context = getPageContext(file);
				context = extend(context, file.frontMatter);

			// Compile template
			var template = handlebars.compile(String(file.contents));
			var templateRes = template(context);

			// Layout processing
			var layout = context.layout || null;

			// If the layout exists, render it with template inside
			if (layout && handlebars.partials[layout]) {
				var layoutData = extend(context, {
					body: templateRes
				});

				// Render layout with given context and content
				var layoutRes = handlebars.partials[layout](layoutData);

				pageRes = layoutRes;
			}
			// Return rendered template
			else {
				pageRes = templateRes;
			}

			file.contents = new Buffer(pageRes);

			this.push(file);
			cb();
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
		.pipe(gulp.dest(config.destDir));
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
			path.resolve(activeDir, '_context.js')
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