$(function () {


	var theme = localStorage.getItem('theme') || null;
	var themeName = "";

	if (theme) {
		themeName = "-" + theme;
	}

	$('.color-item').each(function() {
		if (themeName === $(this).data('theme')) {
			$(this).addClass("active");
		}
	});


	$('.color-item').on('click', function() {
		$('.color-item').removeClass('active');
		$(this).addClass('active');

		var theme = $(this).data('theme');
		localStorage.setItem('theme', theme);
	});
	
});