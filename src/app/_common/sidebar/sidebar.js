$(function () {

	$('#sidebar-menu').metisMenu({
		activeClass: 'open'
	});


	$('.collapse-btn').on('click', function(event){
		event.preventDefault();
		
		$(".main-app").toggleClass("sidebar-collapsed sidebar-opened");
	});
	
});