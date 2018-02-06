var mainBowerFiles 	= require('main-bower-files');

var config = require('../config');

var rootDir 		= config.rootDir;
var srcDir 		= config.srcDir;
var destDir 		= config.destDir;
var bowerDir 		= config.bowerDir;



/***********************************************
*		Vendor script files
************************************************/

	var npmScripts = [
		config.npmDir + '/jquery/dist/jquery.js',
		config.npmDir + '/jquery-flot/jquery.flot.js',
		config.npmDir + '/jquery-flot/jquery.flot.resize.js',
		config.npmDir + '/jquery-flot/jquery.flot.pie.js',
		config.npmDir + '/jquery-flot/jquery.flot.time.js',
		config.npmDir + '/jquery.flot.tooltip/js/jquery.flot.tooltip.js',
		config.npmDir + '/jquery-validation/dist/jquery.validate.js',
		config.npmDir + '/jquery-sparkline/jquery.sparkline.js',
		config.npmDir + '/jqvmap/dist/jquery.vmap.js',
		config.npmDir + '/jqvmap/dist/maps/jquery.vmap.world.js',
		config.npmDir + '/metismenu/dist/metisMenu.js',
		config.npmDir + '/nprogress/nprogress.js',
		config.npmDir + '/quill/dist/quill.js',
		config.npmDir + '/responsive-toolkit/dist/bootstrap-toolkit.js',
		config.npmDir + '/sortablejs/Sortable.js',
		config.npmDir + '/tether/dist/js/tether.js',
		config.npmDir + '/tinycolor2/tinycolor.js',
		config.npmDir + '/dropzone/dist/dropzone.js',
		config.npmDir + '/jquery-touchswipe/jquery.touchSwipe.js',
		config.npmDir + '/jquery.browser/dist/jquery.browser.js',
		config.npmDir + '/popper.js/dist/umd/popper.js',
		config.npmDir + '/bootstrap/dist/js/bootstrap.js',
		config.npmDir + '/raphael/raphael.js',
		config.npmDir + '/morris.js/morris.js',
	];

	exports.scripts = npmScripts;


/***********************************************
*		Vendor style files
************************************************/

	var npmStyles = [
		config.npmDir + '/animate.css/animate.css',
		config.npmDir + '/font-awesome/css/font-awesome.css',
		config.npmDir + '/jqvmap/dist/jqvmap.css',
		config.npmDir + '/metismenu/dist/metisMenu.css',
		config.npmDir + '/nprogress/nprogress.css',
		config.npmDir + '/dropzone/dist/dropzone.css',
		config.npmDir + '/quill/dist/quill.core.css',
		config.npmDir + '/quill/dist/quill.snow.css',
		config.npmDir + '/morris.js/morris.css',
		config.npmDir + '/bootstrap/dist/css/bootstrap.css',
	];

	exports.styles = npmStyles;


/***********************************************
*		Vendor assets files
************************************************/

	/*
		All files which are not .js, .css, .less and fonts
	*/

	exports.assets = mainBowerFiles({
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

/***********************************************
*		Vendor font files
************************************************/


	exports.fonts = mainBowerFiles({
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
