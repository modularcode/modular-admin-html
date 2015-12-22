$(function () {

	// Local storage settings
	var themeSettings = getThemeSettings();
	var themeName = themeSettings.themeName || null;
	var sidebarFixed = themeSettings.sidebarFixed || false;
	var headerFixed = themeSettings.headerFixed || false;
	var footerFixed = themeSettings.footerFixed || false;

	// Init active color
	var $colorItems = $('#customize-menu .color-item');

	$colorItems.each(function() {
		if (themeName === $(this).data('theme')) {
			$colorItems.not($(this)).removeClass("active");
			$(this).addClass("active");
		}
	});

	// Toggle theme color
	$colorItems.on('click', function() {
		$colorItems.removeClass('active');
		$(this).addClass('active');
		
		// set theme type
		themeSettings.themeName = $(this).data('theme');

		// replace css link
		replaceCssLink(themeSettings.themeName);

		$(document).trigger("themechange");

		// save theme settings
		saveThemeSettings();
	});

	function replaceCssLink(themeName) {
		var $link = $('#theme-style');

		if (themeName) {
			$link.attr('href', 'css/app-' + themeName + '.css');
		}
		else {
			$link.attr('href', 'css/app.css');
		}
	}


	function getThemeSettings() {
		return (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) : {};
	}

	function saveThemeSettings() {
		localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
	}

});