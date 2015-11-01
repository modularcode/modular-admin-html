var mainBowerFiles 	= require('main-bower-files');
var path 			= require('path');

var config = require('../config');

var rootDir 		= config.rootDir;
var srcDir 			= config.srcDir;
var destDir 		= config.destDir;
var bowerDir 		= config.bowerDir;



/*******************************************************************************

	...Few words about vendor files
	
	For not including all scripts manually we use plugin
	called main-bower-files. 

	It returns glob of files based on "main" field in vendor packages "bower.json".
	Orders of files will be as per our bower.json, so if you have some libraries
	that should be loaded on first, just move them upwards in project "bower.json".

	If any of files that you want to access is not listed in vendor package, you can 
	define files for that package manually in bower.json "overrides" field.

	For more docs visit.
	https://github.com/ck86/main-bower-files#main-bower-files

	If for any reasons you don't like this approach, and want list your files
	manually, you can just pass manual glob string or array to "src" option

	eg. 

	export.scripts: {
		src: [
			bowerDir + "jquery/dist/jquery.js",
			bowerDir + "angular/jquery.js",
		]
	}

	
********************************************************************************/



/***********************************************
*		Vendor script files
************************************************/
	

	var vendorSrciptFiles = mainBowerFiles({
		filter: [
			'**/*.js',
			'!**/*.min.js'
		],
		paths: rootDir
	});

	vendorSrciptFiles.push(srcDir + "/_vendor/**/*.js");

	exports.scripts = {
		src: vendorSrciptFiles,
		dest: path.resolve(destDir + "/js")
	};

/***********************************************
*		Vendor style files
************************************************/

	var vendorStyleFiles = mainBowerFiles({
		filter: [
			'**/*.css',
			'!**/*.min.css'
		],
		paths: rootDir
	});

	vendorStyleFiles.push(srcDir + "/_vendor/**/*.css");

	exports.styles = {
		src: vendorStyleFiles,
		dest: destDir + "/css"
	};


/***********************************************
*		Vendor assets files
************************************************/

	/*
		All files which are not .js, .css, .less and fonts
	*/

	var vendorAssetFiles = mainBowerFiles({
		filter: [
			'**/*',
			'!**/*.js',
			'!**/*.css',
			'!**/*.less',

			// Ingore fonts
			
			'!**/*.otf',
			'!**/*.eot',
			'!**/*.ttf',
			'!**/*.woff',
			'!**/*.woff2'
		],
		paths: rootDir
	});

	exports.assets = {
		src: vendorAssetFiles,
		dest: destDir + "/assets"
	};

/***********************************************
*		Vendor font files
************************************************/


	var vendorFontFiles = mainBowerFiles({
		filter: [
			'**/*.otf',
			'**/*.eot',
			'**/*.ttf',
			'**/*.woff',
			'**/*.woff2',
			'**/*.svg'
		],
		paths: rootDir
	});


	exports.fonts = {
		src: vendorFontFiles,
		dest: destDir + "/fonts"
	};