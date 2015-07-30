var mainBowerFiles 	= require('main-bower-files');
var path 			= require('path');

var config = require('./config');

var srcDir 		= config.srcDir;
var buildDir 	= config.buildDir;
var bowerDir 	= config.bowerDir;



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
		paths: path.resolve(__dirname)
	});

	vendorSrciptFiles.push(srcDir + "/_vendor/**/*.js");

	exports.scripts = {
		src: vendorSrciptFiles,
		dest: buildDir + "/js"
	};

/***********************************************
*		Vendor style files
************************************************/

	var vendorStyleFiles = mainBowerFiles({
		filter: [
			'**/*.css',
			'!**/*.min.css'
		],
		paths: path.resolve(__dirname)
	});

	vendorStyleFiles.push(srcDir + "/_vendor/**/*.css");

	exports.styles = {
		src: vendorStyleFiles,
		dest: buildDir + "/css"
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
		paths: path.resolve(__dirname)
	});

	exports.assets = {
		src: vendorAssetFiles,
		dest: buildDir + "/assets"
	};


	var vendorFontFiles = mainBowerFiles({
		filter: [
			'**/*.otf',
			'**/*.eot',
			'**/*.ttf',
			'**/*.woff',
			'**/*.woff2',
			'**/*.svg'
		],
		paths: path.resolve(__dirname)
	});


	exports.fonts = {
		src: vendorFontFiles,
		dest: buildDir + "/fonts"
	};