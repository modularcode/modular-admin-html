//LoginForm validation
$(function() {
	if (!$('#reset-form').length) {
        return false;
    }

    var resetValidationSettings = {
	    rules: {
	        email1: {
	            required: true,
	            email: true
	        }
	    },
	    messages: {
	        email1: {
	            required: "Please enter email address",
	            email: "Please enter a valid email address"
	        }
	    },
	    invalidHandler: function() {
			setAnimation({
				name: 'shake',
				selector: '.auth-container > .panel'
			});
		}
	}

	$.extend(resetValidationSettings, validationDefaultSettings);

    $('#reset-form').validate(resetValidationSettings);
})