$(function() {

	$("body").addClass("loaded");

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

	var viewport = ResponsiveBootstrapToolkit.current();

	$('.sameheight-container').each(function() {

		var $items = $(this).find(".sameheight-item");

		// Get max height of items in container
		var maxHeight = 0;

		$items.each(function() {
			$(this).css({height: 'auto'});
			maxHeight = Math.max(maxHeight, $(this).innerHeight());
		});


		// Set heights of items
		$items.each(function() {
			// Ignored viewports for item
			var excludedStr = $(this).data('exclude') || '';
			var excluded = excludedStr.split(',');

			// Set height of element if it's not excluded on 
			if (excluded.indexOf(viewport) === -1) {
				$(this).innerHeight(maxHeight);
			}
		});
	});
}


/***********************************************
*         Default Validation Settings
***********************************************/

var validationDefaultSettings = {
	debug: true,
	errorClass:'has-error',
	validClass:'success',
	errorElement:"span",
	highlight: addErrorClass, 
	unhighlight: addValidClass,
    submitHandler: function(form) {
        form.submit();
    }
};

// add error class
function addErrorClass(element, errorClass, validClass) {
	$(element).parents("div.form-group")
	.addClass(errorClass)
	.removeClass(validClass); 
}

// add valid class
function addValidClass(element, errorClass, validClass) {
	$(element).parents(".has-error")
	.removeClass(errorClass)
	.addClass(validClass); 
}

/***********************************************
*        NProgress Settings
***********************************************/
var npSettings = { 
	easing: 'ease', 
	speed: 500 
}

NProgress.configure(npSettings);

// start load bar
NProgress.start();

// end loading bar 
NProgress.done();


/***********************************************
*        Animation Settings
***********************************************/

function setAnimation(options) {
	var animationName = "animated " + options.name;
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
	$(options.selector)
	.addClass(animationName)
	.one(animationEnd, 
		function(){
			$(this).removeClass(animationName);
		}
	);
}