$(function() {
	$('.nav-profile > li > a').on('click', function() {
		var $el = $(this).next();

		animate({
			name: 'flipInX',
			selector: $el
		});
	});
})