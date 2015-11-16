$(function() {
	setAnimation({
		name: 'flipInY',
		selector: '.error-card > .error-title-block'
	});


	setTimeout(function(){
		var $el = $('.error-card > .error-container');

		setAnimation({
			name: 'fadeInUp',
			selector: $el 
		});

		$el.addClass('visible');
	}, 1000);
})