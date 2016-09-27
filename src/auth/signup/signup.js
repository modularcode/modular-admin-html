//SignupForm validation
$(function() {
	if (!$('#signup-form').length) {
        return false;
    }

    var signupValidationSettings = {
	    rules: {
	    	firstname: {
	    		required: true,
	    	},
	    	lastname: {
	    		required: true,
	    	},
	        email: {
	            required: true,
	            email: true
	        },
	        password: {
				required: true,
				minlength: 8
	        },
	        retype_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			agree: {
				required: true,
			}
	    },
	    groups: {
	    	name: "firstname lastname",
			pass: "password retype_password",
		},
		errorPlacement: function(error, element) {
			if (
				element.attr("name") == "firstname" || 
				element.attr("name") == "lastname" 
			) {
				error.insertAfter($("#lastname").closest('.row'));
				element.parents("div.form-group")
				.addClass('has-error');
			} 
			else if (
				element.attr("name") == "password" || 
				element.attr("name") == "retype_password" 
			) {
				error.insertAfter($("#retype_password").closest('.row'));
				element.parents("div.form-group")
				.addClass('has-error');
			}
			else if (element.attr("name") == "agree") {
				error.insertAfter("#agree-text");
			}
			else {
				error.insertAfter(element);
			}
		},
	    messages: {
	    	firstname: "Please enter firstname and lastname",
	    	lastname: "Please enter firstname and lastname",
	        email: {
	            required: "Please enter email",
	            email: "Please enter a valid email address"
	        },
	        password: {
	        	required: "Please enter password fields.",
	        	minlength: "Passwords should be at least 8 characters."
	        },
	        retype_password: {
	        	required: "Please enter password fields.",
	        	minlength: "Passwords should be at least 8 characters."
	        },
	        agree: "Please accept our policy"
	    },
	    invalidHandler: function() {
			animate({
				name: 'shake',
				selector: '.auth-container > .card'
			});
		}
	}

	$.extend(signupValidationSettings, config.validations);

    $('#signup-form').validate(signupValidationSettings);
});