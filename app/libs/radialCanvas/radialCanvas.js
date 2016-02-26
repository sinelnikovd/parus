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
			}*/
		}
		var j = 0;
		function animateCanvas (startParametrs,drawing) {
			var i = startParametrs.posStart;
			var intervalAnimate = setInterval(function () {
				var offset = 1.5 * Math.PI;
				startParametrs['end'] = (2 * Math.PI * i) / 100 + offset;
				if(i <= startParametrs.size){
					console.log(i)
					draw(startParametrs,drawing);
				}else{
					var newParametrs = {
						start: startParametrs['end'],
						size: 100,
						color: "#0f0",
						posStart: i
					};
					animateCanvas(newParametrs,startParametrs);
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
		animateCanvas(startParametrs, null);

	});

	};
})(jQuery);