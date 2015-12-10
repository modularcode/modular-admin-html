$(function() {

	$("body").addClass("loaded");

});



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