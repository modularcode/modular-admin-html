var path 	= require('path');
var glob 	= require('glob');
var fs 		= require('fs-extra');
var through = require('through2');
var File = require('vinyl');
var StringDecoder = require('string_decoder').StringDecoder;
var extend 	= require('util')._extend;

var frontMatter = require('front-matter');
var handlebars = require('handlebars');
var handlebarsRegistrar = require('handlebars-registrar');

var config 	= require('../config');
var partials = {};

module.exports.task = function(gulp, plugins, paths) {


	// Register handlebars engine helpers and partials
	handlebarsRegistrar(handlebars, {
		helpers: paths.app.helpers,
		partials: paths.app.templates,
		parsePartialName: function (partial) {

			// Save in partials vinyl registry
			partials[partial.shortPath] = new File({
				cwd: partial.cwd,
				path: partial.path,
				base: path.basename(partial.path),
				contents: fs.readFileSync(partial.path)
			});

			return partial.shortPath;
		},
		bustCache: true,
	});


	gulp.src(paths.app.pages)
		// Render pages
		.pipe(through.obj(function (file, enc, cb) {
			file.contents = new Buffer(renderTemplate(file));

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

		// pretify html structure
		.pipe(plugins.prettify({
			indent_size: 4
		}))

		// Output
		.pipe(gulp.dest(config.destDir));
	
};


/********************************************
*				Utils
*********************************************/

function renderTemplate(file, options) {

	options = options || {};

	// Set file frontMatter
	file = setFrontMatter(file);

	// Get context from _context.js files and frontmatter
	var contextExternal = getPageContextExternal(file);

	// Frontmatter context
	var contextTemplate = file.frontMatter || {};

	// Inherited context from child
	var contextInherited = options.contextInherited || {};

	// Result context
	var	context = extend({}, 	  contextExternal);
		context = extend(context, contextTemplate);
		context = extend(context, contextInherited);

	// Page render result
	var pageRes = "";

	// Compile template
	var template = handlebars.compile(String(file.contents));
	var templateRes = template(context);

	// Layout processing
	var layout = context.layout || null;

	// If the layout exists, render it with template inside
	if (layout && partials[layout] && handlebars.partials[layout]) {

		// New instance of context
		var layoutData = extend({}, context);

		// Add body to context
		layoutData = extend(layoutData, {
			body: templateRes
		});

		// Remove layout parameter from inhereted context
		delete layoutData.layout;

		// New vinyl file based on partail vinyl
		var layoutFile = new File(partials[layout]);

		// Call recursively render template again
		pageRes = renderTemplate(layoutFile, {
			contextInherited: layoutData
		});
	}
	// Return rendered template
	else {
		pageRes = templateRes;
	}

	return pageRes;
}


/*
	Frontmatter file
*/
function setFrontMatter(file) {
	// Read content from front matter
	var content = frontMatter(file.contents.toString('utf8'));

	// var res = new Buffer(content.body);
	file.contents = new Buffer(content.body);
	file.frontMatter = content.attributes;

	return file;
}


/*
	This function returns context of current page 
	which is root context extended by all contexts untill
	current level context
*/


function getPageContextExternal(file) {

	// Initial context
	var context = {};

	// Package data
	context.pkg = require('../../package.json');

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