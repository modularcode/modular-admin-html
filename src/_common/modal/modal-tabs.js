$(function() {

	$('.modal-tab-item a').on('click', function(e){
		e.preventDefault();
		
		openTab(e, e.target.hash);
	});

	function openTab(e, tabId) {

		var $modalTabs = $('.modal-tabs');
		var $modalTabsPane = $('.modal-tab-pane');

		// reset item tabs and panels
		$modalTabs.find('li').removeClass('active');
		$modalTabsPane.removeClass('active in ');
		
		// set active tab
		var $activeTab = $modalTabs.find('a[href="' +  tabId + '"]').closest('li');
		
		// activate current tab and pane
		$activeTab.addClass('active');

		$(tabId).addClass('active')
		.delay(150)
		.queue(function(next){
		    $(this).addClass("in");
		    next();
		});
	};


});