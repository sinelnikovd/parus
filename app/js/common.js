$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}

	var mainSlider = $('.main-slider').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		callbacks:true,
	});

	mainSlider.on( "changed.owl.carousel", function (event) {
		//console.log()
		$(".main-slider-nav__item.active").removeClass('active');
		$(".main-slider-nav__item").eq(event.page.index).addClass('active');
	})
	$('.main-slider-nav__item').click(function () {
		mainSlider.trigger('to.owl.carousel',[$(this).index(),500]);
	});


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
		items: 5,
		responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1
		},
		320: {
			items: 1
		},
		// breakpoint from 480 up
		480 : {
			items: 2
		},
		// breakpoint from 768 up
		768 : {
			items: 3
		},
		992 : {
			items: 5
		}

}
	})
	$('.slider-culture__nav .navigation-slider__prev').click(function() {
		culture.trigger('prev.owl.carousel');
	})
	$('.slider-culture__nav .navigation-slider__next').click(function() {
		culture.trigger('next.owl.carousel');
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
	$('.work-sec-2__nav .navigation-slider__prev').click(function() {
		works.trigger('prev.owl.carousel');
	})
	$('.work-sec-2__nav .navigation-slider__next').click(function() {
		works.trigger('next.owl.carousel');
	})

	$('.work-sec-2__navbar-item').click(function () {
		works.trigger('to.owl.carousel',[$(this).index(),500]);
	});

	var animateEnd = true;
	//$('.size-item').mouseover();
	$('.size-item').hover(
		function(){
			//over
				$(this).find('.size-item__hover').addClass('active').animate({top:"0"},400);
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

/*
	function moveBlockLeader (indx, blockWidth) {
		var ctxWidth = $('.persons__list').outerWidth(),
				countBlockInLine = Math.floor(ctxWidth / blockWidth),
				lineNumber = Math.floor(indx / countBlockInLine)+1,
				position = countBlockInLine * lineNumber;

		if(position > $('.persons-item').length) position = $('.persons-item').length
		console.log(position)
		$('.person-description').insertAfter($('.persons-item').eq(position-1));
	}

	function personDescriptionClose (ths) {
		ths.removeClass('active');
		ths.find('.link_next').removeClass('active');
		$('.person-description').slideUp();
	}

	$('.persons-item').click(function () {
		if($(this).hasClass('active')){
			personDescriptionClose($(this));
		}else{
			$('.persons-item.active .link_next.active').removeClass('active');
			$('.persons-item.active').removeClass('active');
			$(this).addClass('active');
			$(this).find('.link_next').addClass('active');
			var el = $(this);
			$('.person-description').slideUp(400,function () {
				moveBlockLeader(el.index('.persons-item'),el.outerWidth());
			});
			$('.person-description').slideDown();
		}
	});




	$('.person-description__close').click(function () {
		personDescriptionClose($('.persons-item.active'));
	});
*/



/*	$('.persons-item').click(function () {
		if($(this).hasClass('active')){
			//personDescriptionClose($(this));
		}else{
			
		}
	});*/


	function initPerson () {
		var ctxWidth = $('.persons__list').outerWidth(),
				blockWidth = $('.persons-item').width(),
				countBlockInLine = Math.floor(ctxWidth / blockWidth);

		$('.persons-item').each(function (indx) {
			var lineNumber = Math.floor(indx / countBlockInLine)+1,
					position = countBlockInLine * lineNumber;
			$('#'+$(this).data('description')).insertAfter($('.persons-item').eq(position-1));
		});
	}

	initPerson();

	function closePersonDescription () {
		$('.persons-item.active .link_next.active').removeClass('active');
		$('.persons-item.active').removeClass('active');
		$('.person-description').slideUp();
	}


	$('.persons-item').click(function () {
		if($(this).hasClass('active')){
			closePersonDescription();
		}else{
			closePersonDescription();

			$(this).find('.link_next').addClass('active');
			$(this).addClass('active');

			$('#'+$(this).data('description')).slideDown();
		}
	});

	$('.person-description__close').click(function () {
		closePersonDescription();
	});





	var el = $('.header-body'),
			elt = $('.header-head').outerHeight(),
			elh = el.outerHeight();

	if($(window).scrollTop() >= el.offset().top){
		$('.header-body').addClass('fixed');
		$('.header-head').css('margin-bottom',elh)
	}

	$(window).scroll(function(){
		if($(window).scrollTop() >= el.offset().top){
			$('.header-body').addClass('fixed');
			$('.header-head').css('margin-bottom',elh)
		}

		if($(window).scrollTop() < elt ){
			$('.header-body').removeClass('fixed');
			$('.header-head').css('margin-bottom',0)
		}
	});




	$(window).resize(function () {

	initPerson();

	el = $('.header-body'),
	elt = $('.header-head').outerHeight(),
	elh = el.outerHeight();

	});













	/* BEGIN CANVAS-RADIAL */
/*	var canvas = document.get
	var canvas = document.getElementById("example"),
			    ctx     = example.getContext('2d');
			ctx.fillRect(0, 0, example.width, example.height);*/
	/* END CANVAS-RADIAL */







});

	//SVG Fallback
/*if (!Modernizr.svg) {
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
}*/