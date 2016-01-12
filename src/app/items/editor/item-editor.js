$(function(){

	// set sortable options
	$('.images-container').sortable({
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		handle: ".control-btn.move",  // Drag handle selector within list items
		draggable: ".image-container" // Specifies which items inside the element should be sortable
	});


	$controlsButtons = $('.controls');

	$controlsButtonsStar = $controlsButtons.find('.star');
	$controlsButtonsRemove = $controlsButtons.find('.remove');

	$controlsButtonsStar.on('click',function(e){
		e.preventDefault();

		$controlsButtonsStar.removeClass('active');
		$controlsButtonsStar.parents('.image-container').removeClass('main');

		$(this).addClass('active');

		$(this).parents('.image-container').addClass('main');
	})

})