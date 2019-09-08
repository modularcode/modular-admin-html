module.exports.register = function (handlebars) {
	handlebars.registerHelper('if_eq', function(a, b) {
		if (a == b) {
			return true;
		} else {
			return false;
		}
	});
};