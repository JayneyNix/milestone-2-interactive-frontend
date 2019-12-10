function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 44.434546, lng: -79.350972 }
  
 });
var labels = "AB";

var locations = [
    { lat: 44.302020, lng: -79.472088 },
    { lat: 44.308918, lng: -79.437413 }
    ];
    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker ({
            position: locations,
            labels: labels[i % labels.length]
        });
    });
    
    var markerClusterer = new MarkerClusterer (map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer/m'
    });


}
