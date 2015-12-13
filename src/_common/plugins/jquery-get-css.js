/*
 * jQuery getCSS Plugin
 * Copyright 2013, intesso
 * MIT license.
 *
 * cross browser function to dynamically load an external css file.
 * see: [github page](http://intesso.github.com/jquery-getCSS/)
 *
 */

(function() {
	/*
		arguments: attributes
		attributes can be a string: then it goes directly inside the href attribute.
		e.g.: $.getCSS("fresh.css")
		attributes can also be an objcet.
		e.g.: $.getCSS({href:"cool.css", media:"print"})
		or:	$.getCSS({href:"/styles/forest.css", media:"screen"})
	*/
	var getCSS = function(attributes) {
			// setting default attributes
			if(typeof attributes === "string") {
				var href = attributes;
				attributes = {
					href: href
				};
			}
			if(!attributes.rel) {
				attributes.rel = "stylesheet"
			}
			// appending the stylesheet
			// no jQuery stuff here, just plain dom manipulations
			var styleSheet = document.createElement("link");
			for(var key in attributes) {
				styleSheet.setAttribute(key, attributes[key]);
			}
			var head = document.getElementsByTagName("head")[0];
			head.appendChild(styleSheet);
		};

	if(typeof jQuery === "undefined") {
		window.getCSS = getCSS;
	} else {
		jQuery.getCSS = getCSS;
	}

})();