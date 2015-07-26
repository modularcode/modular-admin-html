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

	exports.scripts = {
		src: vendorSrciptFiles,
		dest: buildDir + "/js"
	};

/***********************************************
*		Vendor style files
************************************************/

	// var vendorStyleFiles = mainBowerFiles({
	// 	filter: [
	// 		'**/*.css',
	// 		'!**/*.min.css'
	// 	],
	// 	paths: path.resolve(__dirname)
	// });

	exports.styles = {
		src: srcDir + "/_vendor/vendor.less",
		dest: buildDir + "/css"
	};


/***********************************************
*		Vendor assets files
************************************************/

	/*
		All files which are not .js, .css, .less
		are assets (e.g. images, fonts)
	*/

	var vendorAssetFiles = mainBowerFiles({
		filter: [
			'**/*',
			'!**/*.js',
			'!**/*.css',
			'!**/*.less'
		],
		paths: path.resolve(__dirname)
	});

	exports.assets = {
		src: vendorAssetFiles,
		dest: buildDir + "/assets"
	};