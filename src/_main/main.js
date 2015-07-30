$(function() {

	/***********************************************
	*            Example Code Highlight
	***********************************************/

	hljs.configure({
		tabReplace: '    ', // 4 spaces
	});

	hljs.initHighlighting();

	/***********************************************
	*            Same height columns
	***********************************************/

	setSameHeights();

	var resizeTimer;

	$(window).resize(function() {
		clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSameHeights, 150);
	});

});

var numCalls = 0;

function setSameHeights() {
	$('.sameheight').each(function() {

		var $items = $(this).find(".sameheight-item");

		// Get max height of items in container
		var maxHeight = 0;

		$items.each(function() {
			$(this).css({height: 'auto'});
			maxHeight = Math.max(maxHeight, $(this).innerHeight());
		});

		// Set heights of items
		$items.each(function() {
			$(this).innerHeight(maxHeight);
		});
	});
}
