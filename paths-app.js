var config = require('./config');

var srcDir = config.srcDir;
var buildDir = config.buildDir;

/***********************************************
*		Application script files
************************************************/

	/*
		Specifiing the source this way means:

		"take all .js files except /_main/main.js file 
		and then take /_main/main.js file"

		This ensures that main.js file is loaded in the end.
		Ignore context.js files.
	*/

	exports.scripts = {
		src: [
			srcDir + "/_main/config.js",
			srcDir + "/**/!(main|context|config|*-helper)*.js",
			srcDir + "/_main/main.js",
			"!" + srcDir + "/_vendor/**"
		],
		dest: buildDir + "/js"
	};

/***********************************************
*		Application style files
************************************************/

	exports.styles = {
		src: [
			srcDir + "/_main/main.less",
			srcDir + "/**/!(main|variables|vendor)*.less",
		],
		dest: buildDir + "/css/"
	};


/***********************************************
*		Application page files
************************************************/

	/*
		Each page file represents a page which will be rendered into .html page.
		Pages can extend layouts.

	*/

	exports.pages = {
		src: srcDir + "/**/*-page.hbs",
		dest: buildDir + "/"
	};


/***********************************************
*		Application template files
************************************************/
	
	/*
		All template files in application.
		Those should registered as handlebars partials
		in order to use feature like includes or layouts
	*/

	exports.templates = {
		src: srcDir + "/**/*.hbs",
		dest: buildDir + "/templates"
	};

/***********************************************
*  	Application handlebars helpers files
************************************************/

	/*
		Handlebars helpers files
		Read more: http://handlebarsjs.com/block_helpers.html
	*/

	exports.helpers = {
		src: [
			srcDir + "/**/*-helper.js",
			'./node_modules/handlebars-layouts/index.js',
		],
		dest: buildDir + "/templates"
	};


/***********************************************
*		Application layout files
************************************************/

	/*
		Layouts are used for "wrapping" the content of individual pages with common elements, 
		such as the <head></head> and footer sections, which usually contain necessities 
		such as <link> and <script> tags.
	*/

	exports.layouts = {
		src: srcDir + "/**/*-layout.hbs",
		dest: buildDir + "/templates"
	};

/***********************************************
*		Application asset files
************************************************/

	exports.assets = {
		src: srcDir + "/_assets/**/*",
		dest: buildDir + "/assets"
	};