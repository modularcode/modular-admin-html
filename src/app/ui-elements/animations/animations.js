$(function() {

	$('.box-placeholder').on('click', function() {

		var $el = $(this);

		setAnimation({
			name: $el.data('effect'),
			selector: $el 
		});
	})

})