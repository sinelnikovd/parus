(function( $ ) {
	$.fn.dropDownText = function() {
		return this.each(function () {
			$(this).data('height',$(this).height());
			$(this).height($(this).find('p').first().height());
			if($(this).find('p').length <= 1)
				$(this).next('.dropdown-link').hide();
		});
	};

	$.fn.dropDownTextClose = function() {
		return this.each(function () {
			$(this).animate({height: $(this).find('p').first().height()}, 500);
		});
	};

	$.fn.dropDownTextOpen = function() {
		return this.each(function () {
			$(this).animate({height: $(this).data('height')}, 500);
		});
	};

})(jQuery);