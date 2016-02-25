function initContactMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 45.047543, lng: 38.983568},
		scrollwheel: false,
		draggable: false,
		zoom: 8,
	});


	var infoBubble = new InfoBubble({
		map: map,
		content: '<div class="map__info">127486, Москва, бульвар Бескудниковский, 57</div>',
		shadowStyle: 1,
		padding: 10,
		backgroundColor: '#6c9141',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		//hideCloseButton: true,
		closeSrc: 'img/infoBubbleClose.png',
		backgroundClassName: 'transparent',
		arrowPosition: 50,
		arrowSize: 0,
		arrowStyle: 0
	});

	var marker = new google.maps.Marker({
		map: map,
		position: {lat: 45.047543, lng: 38.983568},
		title: 'Hello World!',
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});

	map.addListener('click', function() {
		if(infoBubble.isOpen()){
			infoBubble.close();
		}
	});

	marker.addListener('click', function() {
		infoBubble.open(map, marker);
	});


}