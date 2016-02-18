$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	var mainSec2 = $('.main-sec-2__slider').owlCarousel({
		loop: true,
		nav: false,
		items: 1
	})
	$('.main-sec-2__nav_prev').click(function() {
		mainSec2.trigger('prev.owl.carousel');
	})
	$('.main-sec-2__nav_next').click(function() {
		mainSec2.trigger('next.owl.carousel');
	})

	var culture = $('.slider-culture').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		items: 5
	})
	$('.main-sec-2__nav_prev').click(function() {
		mainSec2.trigger('prev.owl.carousel');
	})
	$('.main-sec-2__nav_next').click(function() {
		mainSec2.trigger('next.owl.carousel');
	})

	var works = $('.slider-works').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		autoHeight: true,
		callbacks:true,

	});

	works.on( "changed.owl.carousel", function (event) {
		//console.log()
		$(".work-sec-2__navbar-item.active").removeClass('active');
		$(".work-sec-2__navbar-item").eq(event.page.index).addClass('active');
	})
	$('.main-sec-2__nav_prev').click(function() {
		works.trigger('prev.owl.carousel');
	})
	$('.main-sec-2__nav_next').click(function() {
		works.trigger('next.owl.carousel');
	})

	$('.work-sec-2__navbar-item').click(function () {
		works.trigger('to.owl.carousel',[$(this).index(),500]);
	});


	//$('.size-item').mouseover();
	$('.size-item').hover(
		function(){
			//over
			$(this).find('.size-item__hover').addClass('active')
																			.animate({top:"0"},400);
		},
		function(){
			//out
			$(this).find('.size-item__hover').animate({top:"136"},400,function () {
				$(this).removeClass('active');
			});
	});


	$('select').niceSelect();


	$( ".accordion" ).accordion({collapsible:true,heightStyle:"content"});
	$( ".accordion" ).accordion( "option", "icons", null );

	$( ".accordion" ).on( "accordionbeforeactivate", function( event, ui ) {
		ui.newHeader.addClass("open")
		ui.newHeader.find(".slides").addClass("open")
		ui.oldHeader.removeClass("open")
		ui.oldHeader.find(".slides").removeClass("open")
	});

	ymaps.ready(initMap);
	function initMap(){   
		if($('div').is('#map')) {
			var map = new ymaps.Map("map", {
				center: [56.11601016, 37.57489343],
				zoom: 12,
				controls: ["smallMapDefaultSet"]
			});

			map.behaviors.disable(['scrollZoom']);

			var Placemark = new ymaps.Placemark([56.11524292, 37.58553644], {
				hintContent: '',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map-marker.png',
				iconImageSize: [29, 46],
				iconImageOffset: [-15, -46]
			});

			map.geoObjects.add(Placemark);
		}
	}

});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}