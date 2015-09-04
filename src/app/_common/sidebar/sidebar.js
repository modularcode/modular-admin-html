$(function () {

	$('#sidebar-menu').metisMenu({
		activeClass: 'open'
	});


	$('#sidebar-collapse-btn').on('click', function(event){
		event.preventDefault();
		
		$(".main-app").toggleClass("sidebar-collapsed");
	});
	
});