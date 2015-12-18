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


	$('.actions-list > li').on('click', '.check', function(e){
		e.preventDefault();

		$(this).parents('.tasks-item')
		.find('.checkbox')
		.prop("checked",  true);

		removeActionList();
	});

});

function removeActionList(){
	$('.item-actions').removeClass('active');
}