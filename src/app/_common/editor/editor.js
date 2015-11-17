$(function() {

	$(".wyswyg").each(function() {

		var $toolbar = $(this).find(".toolbar");
		var $editor = $(this).find(".editor");


		var editor = new Quill($editor.get(0), {
			theme: 'snow'
		});

		editor.addModule('toolbar', {
			container: $toolbar.get(0)     // Selector for toolbar container
		});



	});
	
});