module.exports.register = function (handlebars) {
	handlebars.registerHelper('code', function(options) {

		var className = options.hash.lang || "";

		// Input html
		var input = options.fn(this);

		// Escale html to string
		input = handlebars.Utils.escapeExpression(input);

		// Break by lines
		var lines = input.split("\n");

		// Get number of tabs before first line
		var numTabs = getNumFrontTabs(lines[0]);

		// Remove tabs before 
		lines = lines.map(function(line) {
			return line.substring(numTabs);
		});

		// Rejoin the lines
		return "<pre><code class='" + className + "'>" + lines.join("\n") + "</code></pre>";
	});
};


function getNumFrontTabs(line) {
	var count = 0;
	var index = 0;
	while (line.charAt(index++) === "\t") {
		count++;
	}
	return count;
}