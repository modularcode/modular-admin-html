//LoginForm validation
$(function() {
	if (!$('#login-form').length) {
        return false;
    }

    $('#login-form').validate();
})