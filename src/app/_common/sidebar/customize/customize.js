$(function () {

	// Local storage settings
	var themeSettings = getThemeSettings();
	var themeName = themeSettings.themeName || null;
	var headerFixed = themeSettings.headerFixed || false;
	var sidebarFixed = themeSettings.sidebarFixed || false;
	var footerFixed = themeSettings.footerFixed || false;

	/********************************************
	*											
	*		    Customize Theme Colors
	*
	*********************************************/

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

	/********************************************
	*											
	*		  Customize Container Settings
	*
	*********************************************/
	//change header
	changeTheme({
		sector: 'header',
		isFixed: headerFixed
	});

	//change sidebar
	changeTheme({
		sector: 'sidebar',
		isFixed: sidebarFixed
	});

	//change footer
	changeTheme({
		sector: 'footer',
		isFixed: footerFixed
	});


	// Init radio button element
	var $radioButtons = $('#customize-menu .radio');

	$radioButtons.on('click', function(){
		// customise sector	and settings values
		var sector = $(this).attr('name');
		var value = $(this).val();

		// header customize settings
		if (sector === 'header') {
			themeSettings.headerFixed = isFixed(value);

			changeTheme({
				sector: sector,
				isFixed: themeSettings.headerFixed
			});
		}

		// sidebar customize settings
		else if(sector === 'sidebar') {
			themeSettings.sidebarFixed = isFixed(value);

			changeTheme({
				sector: sector,
				isFixed: themeSettings.sidebarFixed
			});
		}

		// footer customize settings
		else if(sector === 'footer') {
			themeSettings.footerFixed = isFixed(value);

			changeTheme({
				sector: sector,
				isFixed: themeSettings.footerFixed
			});
		}

		// save theme settings
		saveThemeSettings();
	});

	/********************************************
	*											
	*		  Customize Custom Functions
	*
	*********************************************/

	function replaceCssLink(themeName) {
		var $link = $('#theme-style');

		if (themeName) {
			$link.attr('href', 'css/app-' + themeName + '.css');
		}
		else {
			$link.attr('href', 'css/app.css');
		}
	}


	function changeTheme(options){
		var container = $('#app');

		var sectorClass = options.sector + "-fixed";;

		if (options.isFixed) {
			container.addClass(sectorClass);
		}
		else {
			container.removeClass(sectorClass);
		}

		// check customize buttons
		checkCustomizeButtons(options)
	}

	function checkCustomizeButtons(options){
		$('#customize-menu .radio[name=' + options.sector + ']')
		
		.each(function() {
			if (
				(options.isFixed && $(this).val() == 'fixed') ||
				(!options.isFixed && $(this).val() == 'static')
			) {
				$(this).prop('checked', true);
			}
		});
	}

	function isFixed(param) {
		return (param === 'fixed');
	}

	function getThemeSettings() {
		return (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) : {};
	}

	function saveThemeSettings() {
		localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
	}

});