var map;
var InfoBubbles = {};

function initLandMap() {
	map = new google.maps.Map(document.getElementById('land-map'), {
		center: {lat: 45.047543, lng: 38.983568},
		scrollwheel: false,
		zoom: 7
	});



	map.data.loadGeoJson('js/geodata/kk.json');
	map.data.loadGeoJson('js/geodata/kk_dist.json');
	map.data.loadGeoJson('js/geodata/ra.json');
	map.data.loadGeoJson('js/geodata/ra_dist.json');
	map.data.loadGeoJson('js/geodata/sk.json');
	map.data.loadGeoJson('js/geodata/sk_dist.json');

	map.data.setStyle(function (feature) {
		var visible = feature.getProperty("isDistrikt") == true ? false : true;
		if(visible){
			var content = '<div class="infobubble__content" onclick="showDistrict('+feature.getProperty("ID")+')">'+feature.getProperty('contentInfoBubble')+'</div>',
				opiton = optionsInfoBubble(map, content, new google.maps.LatLng(feature.getProperty('positionInfoBubbleLat'), feature.getProperty('positionInfoBubbleLng'))),
				featureInfoBubble = new InfoBubble(opiton);
			featureInfoBubble.open();
		}else{
			var content = '<div class="infobubble__content" onclick="showPopup('+feature.getProperty("ID")+')" >'+feature.getProperty('contentInfoBubble')+'</div>',
				opiton = optionsInfoBubble(map, content, new google.maps.LatLng(feature.getProperty('positionInfoBubbleLat'), feature.getProperty('positionInfoBubbleLng'))),
				featureInfoBubble = new InfoBubble(opiton);
		}
		InfoBubbles[feature.getProperty('ID')]= featureInfoBubble;

		return {
			fillColor: 'DarkGreen',
			fillOpacity: 0.3,
			strokeColor: 'OliveDrab',
			strokeWeight: 2,
			visible: visible
		};
	});



	map.data.addListener('click', function(event) {
		if(!event.feature.getProperty('isDistrikt')){
			showDistrict(event.feature.getProperty('ID'));
		}else{
			showPopup(event.feature.getProperty('ID'));
		}

	});


}


function showRegion (id) {
	for (var key in InfoBubbles) {
		InfoBubbles[key].close()
	}
	map.data.setStyle(function(feature) {
		var visible = feature.getProperty("ID") == id ? true : false;
		if(visible) InfoBubbles[feature.getProperty("ID")].open();
		map.setZoom(7);
		map.setCenter({lat: 45.047543, lng: 38.983568});
		return {
			fillColor: 'DarkGreen',
			fillOpacity: 0.3,
			strokeColor: 'OliveDrab',
			strokeWeight: 2,
			visible: visible
		};
	});
}

function optionsInfoBubble(map, content, position) {
	return {
		map: map,
		content: content,
		position: position,
		shadowStyle: 1,
		padding: 0,
		backgroundColor: '#6c9141',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'infobubble',
		arrowPosition: 50,
		arrowSize: 10,
		arrowStyle: 0
	};
}



function showDistrict(id) {
	for (var key in InfoBubbles) {
		InfoBubbles[key].close()
	}
	$(".accordion-maps__head").each(function (indx) {
		if($(this).data("id") == id) $(".accordion-maps").accordion( "option", "active", indx );
	})
	
	map.data.setStyle(function(feature) {
		var visible = feature.getProperty("ADM4_ID") == id ? true : false;
		if(visible){
			InfoBubbles[feature.getProperty("ID")].open();
			map.setZoom(8);
			map.setCenter( {lat: feature.getProperty('positionInfoBubbleLat'), lng: feature.getProperty('positionInfoBubbleLng')});
		}
		return {
			fillColor: 'DarkGreen',
			fillOpacity: 0.3,
			strokeColor: 'OliveDrab',
			strokeWeight: 2,
			visible: visible
		};
	});
}


function showPopup (id) {
	$('.accordion-maps__item.active').removeClass('active');
	$('.accordion-maps__item[data-id = "'+id+'.0"').addClass('active');
	$('.popup-maps-right.active').removeClass('active');
	$('.popup-maps-right[data-id = "'+id+'.0"]').addClass('active');
}


function showAllRegion () {
	for (var key in InfoBubbles) {
		InfoBubbles[key].close()
	}
	map.data.setStyle(function(feature) {
		var visible = feature.getProperty("isDistrikt") == true ? false : true;
		if(visible) InfoBubbles[feature.getProperty("ID")].open();
		map.setZoom(7);
		map.setCenter({lat: 45.047543, lng: 38.983568});
		return {
			fillColor: 'DarkGreen',
			fillOpacity: 0.3,
			strokeColor: 'OliveDrab',
			strokeWeight: 2,
			visible: visible
		};
	});

}