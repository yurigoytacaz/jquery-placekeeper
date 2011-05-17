/*
 * jQuery Placekeeper
 * Copyright 2011 Caio Gondim and Yuri Goytacaz
 * Released under the MIT and GPL licenses.
 */

(function($){
	$.fn.placeholder = function(options)
	{
		var settings = {
			focusOpacity: 0.3,
			focusSpeed: 300
		}
		
		if (options)
		{
			$.extend(settings, options)
		}

		return this.each(function(index) {
			var that = this
			var $placeholderText = $(this).parent().find('strong')

			var inputPaddingTop = $(this).css('padding-top');
			var inputPaddingTopInt = parseInt(inputPaddingTop) + 1;
			var inputPaddingLeft = $(this).css('padding-left');
			var inputPaddingLeftInt = parseInt(inputPaddingLeft) + 2;
			
			// posicionar strong em cima do input
			$(this).parent().css('position','relative');
			$placeholderText
				.css('position','absolute')
				.css('z-index','9')
				.css('top',inputPaddingTopInt + 'px')
				.css('left',inputPaddingLeftInt + 'px')

			//
			$placeholderText.click(function() {
				$(that).click()
			});
			
			//
			$(this).focus(function() {
				if ( $(this).val().length == 0) {
					$placeholderText.animate({opacity: settings.focusOpacity}, settings.focusSpeed)
				}
			})

			//
			$(this).keyup(function() {
				if ( $(this).val().length >=1 ) {
					$placeholderText.animate({opacity: 0}, 100)
				}else{
					$placeholderText.animate({opacity: settings.focusOpacity}, settings.focusSpeed)
				}
			})
		
			//
			$(this).blur(function(event) {
				if ( $(this).val().length == 0) {
					$placeholderText.animate({opacity: 1}, settings.focusSpeed)
				}
			})
			
		})
	}
})(jQuery)