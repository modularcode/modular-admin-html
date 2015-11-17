module.exports.register = function (handlebars) {
	handlebars.registerHelper('for', function(from, to, incr, block) {
	    var accum = '';
	    for(var i = from; i < to; i += incr)
	        accum += block.fn(i);
	    return accum;
	});
};