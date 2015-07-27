var glob = require('glob');
var path = require('path');

var gulp 	= require('gulp');
var plugins = require('gulp-load-plugins')();

/********************************************
*			Configs And Paths
*********************************************/

var config = require('./config');

var paths = {
	app: 	require('./paths-app'),
	vendor: require('./paths-vendor')
};


/********************************************
*   		Load Build Tasks
*********************************************/

var buildTasks = loadTasks();

gulp.task('build', buildTasks);

/*********************************************
*				 Other Tasks
**********************************************/

// Local server pointing on build folder
gulp.task('connect', function() {
	plugins.connect.server({
		root: config.buildDir,
		port: config.port || 3333,
		livereload: true
	});
});


// Rerun the task when a file changes
gulp.task('watch', function() {
	// When template changes recompile .html pages
	plugins.watch(paths.app.templates.src, function() {
	    gulp.start('app-pages');
	});

	// When context file changes recompile .html pages
	plugins.watch(config.srcDir + "/**/.context.js", function() {
	    gulp.start('app-pages');
	});

	// When script changes recompile scripts
	plugins.watch(paths.app.scripts.src, function() {
	    gulp.start('app-scripts');
	});

	// When style changes recompile styles
	plugins.watch(paths.app.styles.src, function() {
	    gulp.start('app-styles');
	});
});

// Deploys to github pages
gulp.task('deploy', function() {
	return gulp.src('./public/**/*')
		.pipe(plugins.ghPages());
});



/********************************************
*				Main Tasks
*********************************************/


// // Run this task for development
gulp.task('develop', [
	'build',
	'watch', 
	'connect'
]);

gulp.task('default', ['develop']);



/**************************************
*				Utils
***************************************/


function loadTasks() {
	var taskNames = [];

	// Load all tasks from tasks folder
	glob.sync('./tasks/*.js').forEach(function(filePath) {
		var taskName = path.basename(filePath, '.js');

		taskNames.push(taskName);

		gulp.task(taskName, function() {
			require(filePath)(gulp, plugins, paths)
		});
	});


	return taskNames;
}