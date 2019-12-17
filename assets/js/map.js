// Initialize map and set marker locations and icon

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 44.434546, lng: -79.350972 }
  
 });

setMarkers(map);
}
var marinas = [
    ['Island Grove Marina', 44.302020, -79.472088, 1],
    ['Krates Marina Ltd', 44.225097, -79.465745, 2],
    
    ['Willow Beach Marina', 44.308918, -79.437413, 3],
    ['Virginia Beach Marina', 44.327637, -79.287490, 4],
    
    ['Cooks Bay Marina', 44.225448, -79.532250, 5],
    ['Lefroy Harbour Resorts', 44.256730, -79.540350, 6],
    
    ['Friday Harbour Resort', 44.391659, -79.525531, 7],
    ['Barrie City Marina', 44.385429, -79.690452, 8],
    
    ['Lake Simcoe Marine', 44.270579, -79.540305, 9],
    ['Kon Tiki Marine', 44.228860, -79.531020, 10],
    
    ['Coves of Keswick', 44.227932, -79.458148, 11],
    ['Keswick Marine Ltd', 44.228393, -79.465250, 12],
    
    ['Monto Reno Marina Limited', 44.264661, -79.544191, 13],
    ['Trent Talbot Marina', 44.477527, -79.153965, 14],
    
    ['Marina Del Rey', 44.577239, -79.322960, 15],
    ['Bridge Port Marina', 44.607499, -79.372620, 16],
    
    ['Blue Beacon Marina', 44.603249, -79.367925, 17],
    ['Port of Orillia', 44.612924, -79.413152, 18],
    
    ['Mariposa Landing', 44.606715, -79.371680, 19],
    ['Lauderdale Point Marina & Resort Inc', 44.796297, -79.393036, 20],
    ];
    
function setMarkers(map) {
        var image = {
            url: 'assets/images/anchor-map-icon.png',
            size: new google.maps.Size(25, 25),
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
    
infowindow = new google.maps.InfoWindow();
    
    for (var i = 0; i < marinas.length; i++) {
        position = new google.maps.LatLng(marinas[i][1], marinas[i][2]);
        marker = new google.maps.Marker( {
            position: position,
            map: map,
            title: marinas[i][0]
            
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent("<div>HEllo</div>");
            infoWindow.open(map, this);
        });
    
    }

    }
    

