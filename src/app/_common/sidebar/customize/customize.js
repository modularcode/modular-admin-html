$(function () {

	// set theme type
	var theme = localStorage.getItem('theme') || null;

	// remove css link
	removeCssLink(theme);

	// load css link
	loadCssLink(theme);
	

	$('.color-item').each(function() {
		if (theme === $(this).data('theme')) {
			$(this).addClass("active");
		}
	});


	$('.color-item').on('click', function() {
		$('.color-item').removeClass('active');
		$(this).addClass('active');
		
		// set previous version of theme type
		var prevTheme = theme;

		// set theme type
		theme = $(this).data('theme');
		localStorage.setItem('theme', theme);

		// load css link
		loadCssLink(theme);

		// remove css link
		removeCssLink(prevTheme);
	});


	function loadCssLink(theme){
		var themeName = "app";

		if (theme) {
			themeName += "-" + theme;
		}

		$.getCSS("/css/" + themeName + ".css");
	}

	function removeCssLink(theme){
		var themeName = "app";

		if (theme) {
			themeName += "-" + theme;
		}

		themeName += ".css";

		$("head").find("link[rel=stylesheet]").attr("href", function (i, src) {
			if (src.search(themeName) >= 0) {
				$(this).remove();
			}
		});
	}
	
});