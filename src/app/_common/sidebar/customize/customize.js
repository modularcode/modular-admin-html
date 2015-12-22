$(function () {

	// set theme type
	var theme = localStorage.getItem('theme') || null;

	// remove css link
	replaceCssLink(theme);
	

	$('.color-item').each(function() {
		if (theme === $(this).data('theme')) {
			$(this).addClass("active");
		}
	});


	$('.color-item').on('click', function() {
		$('.color-item').removeClass('active');
		$(this).addClass('active');
		
		// set theme type
		theme = $(this).data('theme');
		localStorage.setItem('theme', theme);

		// remove css link
		replaceCssLink(theme);
	});

	function replaceCssLink(theme){
		var themeName = "app";

		if (theme) {
			themeName += "-" + theme;
		}

		themeName += ".css";

		$('#theme-style').attr('href', 'css/' + themeName);

		config.colorPrimary = tinycolor($("#ref .color-primary").css("color")).toHexString();
	}
	
});