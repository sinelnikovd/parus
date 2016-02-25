(function( $ ) {
	$.fn.radialCanvas = function() {
	
	return this.each(function () {
		var canvas = document.getElementById($(this).attr('id')),
				ctx = canvas.getContext('2d'),
				centerX = canvas.width/2, 
				centerY = canvas.height/2,
				lineWidth = 10,
				size = $(this).data('size') ? $(this).data('size') : 100,
				radius = (Math.min(canvas.width,canvas.height)/2)-lineWidth;


		function draw() {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = 'rgba(0,0,255,1)';

			ctx.beginPath();
			ctx.arc(centerX,centerY,radius,0,2*Math.PI);
			ctx.stroke();
		}

		function animateCanvas () {
			var i = 0;
			var intervalAnimate = SetInterval(function () {
				if(i = 100) clearInterval(intervalAnimate);
				draw();
			},200);
		}

		animateCanvas();

	});

	};
})(jQuery);