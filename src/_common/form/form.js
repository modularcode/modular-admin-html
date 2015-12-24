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