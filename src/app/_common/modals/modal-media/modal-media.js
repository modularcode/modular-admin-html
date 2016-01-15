var modalMedia = {
	$el: $("#modal-media"),
	result: {},
	options: {},
	open: function(options) {
		options = options || {};
		this.options = options;


		this.$el.modal('show');
	},
	close: function() {
		if ($.isFunction(this.options.beforeClose)) {
			this.options.beforeClose(this.result);
		}

		this.$el.modal('hide');

		if ($.isFunction(this.options.afterClose)) {
			this.options.beforeClose(this.result);
		}
	}
};

$(function(){

	activateTab('#upload');

	$('.modal-tab-item a').on('click', function(e){
		e.preventDefault();
		
		activateTab(e.target.hash);
	});

	function activateTab(tabId){

		var $modalTabs = $('.modal-tabs');
		var $modalTabsPane = $('.modal-tab-pane');

		// reset item tabs and panels
		$modalTabs.find('a').removeClass('active');
		$modalTabsPane.removeClass('active in ');
		
		// set active tab
		var $activeTab = $modalTabs.find('a[href="' +  tabId + '"]');
		
		// activate current tab and pane
		$activeTab.addClass('active');

		$(tabId).addClass('active')
		.delay(150)
		.queue(function(next){
		    $(this).addClass("in");
		    next();
		});
	};
})