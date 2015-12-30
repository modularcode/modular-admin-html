$(function(){

	// set sortable options
	$('.images-container').sortable({
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		handle: ".control-btn.move",  // Drag handle selector within list items
		filter: ".new",  // Selectors that do not lead to dragging (String or Function)
		draggable: ".image-container" // Specifies which items inside the element should be sortable
	});

	$controlsButtons = $('.controls');

	$controlsButtonsStar = $controlsButtons.find('.star');
	$controlsButtonsRemove = $controlsButtons.find('.remove');

	$controlsButtonsStar.on('click',function(e){
		e.preventDefault();

		$controlsButtonsStar.removeClass('active')

		$(this).addClass('active');
	})

})