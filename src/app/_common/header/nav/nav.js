$(function() {
	$('.nav-profile > li > a').on('click', function() {
		var $el = $(this).next();

		setAnimation({
			name: 'flipInX',
			selector: $el
		});
	});
})