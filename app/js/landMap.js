function initLandMap() {
	var map = new google.maps.Map(document.getElementById('land-map'), {
		center: {lat: 45.047543, lng: 38.983568},
		//center: {lat: -28, lng: 137},
		scrollwheel: false,
		zoom: 7
	});

	map.data.loadGeoJson('js/geodata/kk.json');
	map.data.loadGeoJson('js/geodata/ra.json');
	map.data.loadGeoJson('js/geodata/sk.json');
	map.data.setStyle({
			fillColor: 'DarkGreen',
			fillOpacity: 0.3,
			strokeColor: 'OliveDrab',
			strokeWeight: 2
	});


	var kkInfoBubble =  new InfoBubble(optionsInfoBubble(map, "Краснодарский край", new google.maps.LatLng(44.989221, 38.284991)));
	kkInfoBubble.open();
	var raInfoBubble =  new InfoBubble(optionsInfoBubble(map, "Республика Адыгея", new google.maps.LatLng(44.433934, 40.135837)));
	raInfoBubble.open();
	var skInfoBubble =  new InfoBubble(optionsInfoBubble(map, "Ставропольский край", new google.maps.LatLng(45.340825, 41.846772)));
	skInfoBubble.open();

	map.data.addListener('click', function(event) {
		showDistrict(1);
		map.data.setStyle({visible: false});
		//map.data.overrideStyle(event.feature, {strokeWeight: 8, visible: true});
		//console.log(event.feature.getProperty('letter'));
		map.data.loadGeoJson('js/geodata/kk.json');
	});

/**
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


/*
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
*/

}

function optionsInfoBubble(map, title, position) {
	return {
		map: map,
		content: '<div class="map__info" onclick=\'showDistrict(1)\'>'+title+'</div>',
		position: position,
		shadowStyle: 1,
		padding: 10,
		backgroundColor: '#6c9141',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'transparent',
		arrowPosition: 50,
		arrowSize: 10,
		arrowStyle: 0
	};
}

function showDistrict(id) {
	console.log('sdasds')
}