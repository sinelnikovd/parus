var map;
var InfoBubbles = [];

function initLandMap() {
	map = new google.maps.Map(document.getElementById('land-map'), {
		center: {lat: 45.047543, lng: 38.983568},
		//center: {lat: -28, lng: 137},
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
			var content = '<div class="infobubble__content" onclick=\'showDistrict('+feature.getProperty("ID")+')\'><h2 class="infobubble__title">'+feature.getProperty('contentInfoBubble')+'</div></div>',
				opiton = new optionsInfoBubble(map, content, new google.maps.LatLng(feature.getProperty('positionInfoBubbleLat'), feature.getProperty('positionInfoBubbleLng'))),
				featureInfoBubble = new InfoBubble(opiton.getOptions());
			featureInfoBubble.open();
		}else{
			var content = '<div class="infobubble__content" >'+feature.getProperty('contentInfoBubble')+'</div>',
				opiton = new optionsInfoBubble(map, content, new google.maps.LatLng(feature.getProperty('positionInfoBubbleLat'), feature.getProperty('positionInfoBubbleLng'))),
				featureInfoBubble = new InfoBubble(opiton.getOptions());
		}
		InfoBubbles.push(featureInfoBubble);
		//console.log(visible);
		return {
			fillColor: 'DarkGreen',
			fillOpacity: 0.3,
			strokeColor: 'OliveDrab',
			strokeWeight: 2,
			visible: visible
		};
	});

	
	
	
	/*var regionKrasnodarOpiton = new regionOptionsInfoBubble(map, "Краснодарский край", new google.maps.LatLng(44.989221, 38.284991));
	var kkInfoBubble =  new InfoBubble(regionKrasnodarOpiton.getOptions());
	kkInfoBubble.open();

	var regionAdgeyaOpiton = new regionOptionsInfoBubble(map, "Республика Адыгея", new google.maps.LatLng(44.433934, 40.135837));
	var raInfoBubble =  new InfoBubble(regionAdgeyaOpiton.getOptions());
	raInfoBubble.open();

	var regionStavropolOpiton = new regionOptionsInfoBubble(map, "Ставропольский край", new google.maps.LatLng(45.340825, 41.846772));
	var skInfoBubble =  new InfoBubble(regionStavropolOpiton.getOptions());
	skInfoBubble.open();*/



	map.data.addListener('click', function(event) {
		if(!event.feature.getProperty('isDistrikt')){
			showDistrict(event.feature.getProperty('ID'));
		}
	//	map.data.setStyle({visible: false});
		//map.data.overrideStyle(event.feature, {strokeWeight: 8, visible: true});
		//console.log(event.feature.getProperty('letter'));
	});


}

function optionsInfoBubble(map, content, position) {
	this.options = {
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
optionsInfoBubble.prototype.getOptions = function() {
	return this.options;
}




function showDistrict(id) {
	map.data.setStyle(function(feature) {
		var visible = feature.getProperty("ADM4_ID") == id ? true : false;
		return {
			visible: visible
		};
	});
}