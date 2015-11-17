module.exports.register = function (handlebars) {
	handlebars.registerHelper('editor', function(options) {
		// Partial
		var template = handlebars.partials["app/_common/editor/editor"];

		return template({
			content: options.fn(this) || ""
		});
	});
};