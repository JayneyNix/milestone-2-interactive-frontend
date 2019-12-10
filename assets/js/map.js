function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 44.434546, lng: -79.350972 }
  
 });

setMarkers(map);
}
var marinas = [
    ['Island Grove Marina', 44.302020, -79.472088, 2],
    ['Willow Beach Marina', 44.308918, -79.437413, 1],
    ];
    
    function setMarkers(map) {
        var image = {
            url: 'assets/images/anchor-small.png',
            size: new google.maps.Size(30, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(40, 0)
        };
    
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    
    for (var i = 0; i < marinas.length; i++) {
        var boating = marinas[i];
        var marker = new google.maps.Marker({
            position: {lat: boating[1], lng: boating[2]},
            map: map,
            icon: image,
            shape: shape,
            title: marinas[0],
            zIndex: marinas[3],
            
        });
    }
    }

