
$(document).ready(function() {
	function initialize() {
		var centerPoint = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
			center: centerPoint, zoom: 15, scrollwheel: false
		}

		var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

		var marker = new google.maps.Marker({
			position: centerPoint, map: map, animation: google.maps.Animation.DROP
		})
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});