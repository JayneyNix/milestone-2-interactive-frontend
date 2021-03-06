// Initialize map and set marker locations and icon
var markers = [];
var map;
var marinasToDisplay = [];
var fieldsToCheck = [];
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: { lat: 44.434546, lng: -79.350972 }

  });

  // Set marker locations

  setMarkers(map, fieldsToCheck);
  
}

var marinas = [
  ['Island Grove Marina', 44.302020, -79.472088],
  ['Krates Marina Ltd', 44.225097, -79.465745],

  ['Willow Beach Marina', 44.308918, -79.437413],
  ['Virginia Beach Marina', 44.327637, -79.287490],

  ['Cooks Bay Marina', 44.225448, -79.532250],
  ['Lefroy Harbour Resorts', 44.256730, -79.540350],

  ['Friday Harbour Resort', 44.391659, -79.525531],
  ['Barrie City Marina', 44.385429, -79.690452],

  ['Lake Simcoe Marine', 44.270579, -79.540305],
  ['Kon Tiki Marine', 44.228860, -79.531020],

  ['Coves of Keswick', 44.227932, -79.458148],
  ['Keswick Marine Ltd', 44.228393, -79.465250],

  ['Monto Reno Marina Limited', 44.264661, -79.544191],
  ['Trent Talbot Marina', 44.477527, -79.153965],

  ['Marina Del Rey', 44.577239, -79.322960],
  ['Bridge Port Marina', 44.607499, -79.372620],

  ['Blue Beacon Marina', 44.603249, -79.367925],
  ['Port of Orillia', 44.612924, -79.413152],

  ['Mariposa Landing', 44.606715, -79.371680],
  ['Lauderdale Point Marina & Resort Inc', 44.796297, -79.393036],
];

// Set icons to be used for marker locations

function setMarkers(map, fields) {
   marinasToDisplay = [];
  var image = {
    url: 'assets/images/anchor-map-icon.png',
    size: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

// Create an infowindow overlay for the map markers
for(let field of fields){
    for(let item of simcoe){
        if(item[field] == "Yes"){
            for(let m of marinas){
                if(m[0] == item.name){
                    marinasToDisplay.push(m)
                }
            }
        }
    }
}
  

  
  for (var i = 0; i < marinasToDisplay.length; i++) {
    var position = new google.maps.LatLng(marinasToDisplay[i][1], marinasToDisplay[i][2]);
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      shape: shape,
      title: marinasToDisplay[i][0],
    });

    var result = simcoe.filter(obj => {
      return obj.name === marinasToDisplay[i][0];
    });
marker.result = result[0];

var infowindow = new google.maps.InfoWindow();

// Create an event listener which waits for the mouse click and shows an infowindow
markers.push(marker)
   google.maps.event.addListener(marker, "click", (function(marker) {
      return function(evt) {
        var content = marker.getTitle();
        var body = "<br>" + "Marina Website: " + marker.result.marinaWebsite + "<br>" + "Day Fee: " + marker.result.dayFee + "<br>" + "Season Pass Price: " + marker.result.summerPass + "<br>" + "Accommodation Available? " + marker.result.accommodation + "<br>" + "Restaurant Available? " + marker.result.restaurant + "<br>" + "Max. Boat Size: " + marker.result.maxBoatSize + "<br>" + "Is it a Full Service Marina? " + marker.result.fullService;
        console.log(body);
        console.log(typeof body);

        infowindow.setContent(`${content} ${body}`);
        infowindow.open(map, marker);

      };
      
    })(marker));
  }
  
  
google.maps.event.addListener(map, 'click', function()
    {
  infowindow.close();
 });
}




// document.getElementById("filterFullService").addEventListener("click", filterFullService);
let inputs = document.querySelectorAll('input')
console.log(inputs)
inputs.forEach(function(input){
    input.addEventListener('click', filter)
})

function clearMarkers() {
  
  while (markers.length > 0) {
    markers.pop().setMap(null);
  }
}



function addFullServiceMarkers() {
  if (simcoe.fullService=="Yes")  
  marker.addTo(map);
}

function filter() {
    clearMarkers()
  if (this.checked) {
    fieldsToCheck.push(this.id)
    console.log(fieldsToCheck)
    setMarkers(map, fieldsToCheck);
    
  }
  else {
      fieldsToCheck.splice(fieldsToCheck.indexOf(this.id),1)
      console.log(fieldsToCheck)
    setMarkers(map, fieldsToCheck);
  }
}

var select = document.getElementById("marinaSelect");
for (var i = 0; i < marinas.length; ++i) {
    select[select.length] = new Option(marinas[i][0], marinas[i][0]);
}



addFullServiceMarkers();
  
