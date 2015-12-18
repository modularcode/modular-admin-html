$(function(){

	$(document).on('click',function(e) {

		if (
			!$(e.target).closest('.item-actions').length
    	) {
			removeActionList();
		}
	});
	
	$('.item-actions-toggle-btn').on('click',function(e){
		e.preventDefault();

		removeActionList();
		$(this).parent().toggleClass('active');	
	});

});

function removeActionList(){
	$('.item-actions').removeClass('active');
}