var path = require('path');

module.exports = {
	rootDir: "../",						// Root dir
	srcDir: path.resolve("../src"),					// Source files
	destDir: path.resolve("../dist"),				// Build destination
	bowerDir: "../bower_components",  	// Bower dir
	npmDir:   path.resolve("../node_modules"),		// Npm dir
	port: 4000
};
