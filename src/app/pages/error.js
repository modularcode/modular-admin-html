$(function() {
	setAnimation({
		name: 'flipInY',
		selector: '.error-panel > .error-title-block'
	});


	setTimeout(function(){
		var $el = $('.error-panel > .error-container');

		setAnimation({
			name: 'fadeInUp',
			selector: $el 
		});

		$el.addClass('visible');
	}, 1000);
})