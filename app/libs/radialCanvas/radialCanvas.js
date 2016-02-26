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


		function draw (drawing) {
			var offset = 1.5 * Math.PI,
					start = (2 * Math.PI * drawing.start) / 100 + offset,
					end = (2 * Math.PI * drawing.end) / 100 + offset;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = drawing.color;
			ctx.lineCap="round";



			ctx.beginPath();
			ctx.arc(centerX,centerY,radius,start,end);
			ctx.stroke();
			ctx.restore();
		}

		function animation () {
			var i = 0,
					interval = setInterval(function () {
						draw();
						if(i == 100) clearInterval(interval);
						i++;
					},20);
		}
		var drawings ={
			0: {start: 0, end: i, color: "#000"}
		};
		animation(drawings);



/*
		function draw(startParametrs,drawing) {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = startParametrs.color;
			ctx.lineCap="round";

			ctx.beginPath();


			ctx.arc(centerX,centerY,radius,startParametrs.start,startParametrs.end);
			ctx.stroke();
			ctx.restore();
			/**if(drawing){
				//for(var key in drawing){
					ctx.beginPath();
					ctx.strokeStyle = drawing['color'];
					ctx.arc(centerX,centerY,radius,drawing['start'],drawing['end']);
					ctx.stroke();
					ctx.restore();
					ctx.closePath();
				//}
			}
		}
		var j = 0;
		function animateCanvas (startParametrs) {
			var i = startParametrs.posStart;
			var intervalAnimate = setInterval(function () {
				var offset = 1.5 * Math.PI;
				startParametrs['end'] = (2 * Math.PI * i) / 100 + offset;
				if(i <= startParametrs.size){
					console.log(i)
					draw(startParametrs,drawing);
				}

				if(i >= 100) clearInterval(intervalAnimate);
				i++;
				//j++;
			},20);
		}


		var startParametrs = {
			start: 1.5 * Math.PI,
			size: size,
			color: "#f00",
			posStart: 0
		};
		animateCanvas(startParametrs);
*/
	});

	};
})(jQuery);