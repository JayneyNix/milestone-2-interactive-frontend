// Initialize map and set marker locations and icon

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: { lat: 44.434546, lng: -79.350972 }

  });

  setMarkers(map);
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

var simcoe = [
  {
    name: "Island Grove",
    marinaWebsite: "https://www.islandgrovemarina.com",
    dayFee: "$25",
    summerPass: "Not available",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "22ft",
    fullService: false,
  },
  {
    name: "Krates Marina Ltd",
    marinaWebsite: "https://www.kratesmarina.com/marina-services",
    dayFee: "$20",
    summerPass: "Not available",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "20ft",
    fullService: false,
  },
  {
    name: "Willow Beach Marina",
    marinaWebsite: "None",
    dayFee: "Season Pass Only",
    summerPass: "$200",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "23ft",
    fullService: false,
  },
  {
    name: "Virginia Beach Marina",
    marinaWebsite: "https://virginiabeach-marina.com",
    dayFee: "$25",
    summerPass: "Not available",
    accommodation: false,
    restuarant: true,
    maxBoatSize: "33ft",
    fullService: false,
  },
  {
    name: "Cooks Bay Marina",
    marinaWebsite: "http://www.cooksbaymarina.com",
    dayFee: "$35",
    summerPass: "$260",
    accommodation: false,
    restaurant: true,
    maxBoatSize: "30ft",
    fullService: false,
  },
  {
    name: "Lefroy Harbour Resorts",
    marinaWebsite: "http://www.lefroyharbour.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: true,
    maxBoatSize: "60ft",
    fullService: true,
  },
  {
    name: "Friday Harbour Resort",
    marinaWebsite: "https://www.fridayharbour.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: true,
    restaurant: true,
    maxBoatSize: "60ft",
    fullService: true,
  },
  {
    name: "Barrie City Marina",
    marinaWebsite: "https://www.barrie.ca/Living/ParksTrails/Waterfront/Pages/Marina.aspx",
    dayFee: "$17.70 + HST",
    summerPass: "$177",
    accommodation: true,
    restaurant: true,
    maxBoatSize: "60ft",
    fullService: false,
  },
  {
    name: "Lake Simcoe Marine",
    marinaWebsite: "https://www.lakesimcoemarine.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "25ft",
    fullService: false,
  },
  {
    name: "Kon Tiki Marine",
    marinaWebsite: "http://www.lefroyharbour.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "46ft",
    fullService: true,
  },
  {
    name: "Coves of Keswick",
    marinaWebsite: "http://www.lakesimcoemarina.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: false,
   maxBoatSize: "21ft",
    fullService: false,
  },
  {
    name: "Keswick Marine Ltd",
    marinaWebsite: "http://www.keswickmarine.com",
    dayFee: "Season Pass Only",
    summerPass: "$225",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "30ft",
    fullService: true,
  },
  {
    name: "Monto Reno Marina Limited",
    marinaWebsite: "https://www.montoreno.com",
    dayFee: "$17 - $45 (based on boat size)",
    summerPass: "$265 up to 21ft",
    accommodation: false,
    restaurant: true,
    maxBoatSize: "38ft",
    fullService: false,
  },
  {
    name: "Trent Talbot Marina",
    marinaWebsite: "http://www.trenttalbotmarina.com",
    dayFee: "$10",
    summerPass: "$485",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "45ft",
    fullService: false,
  },
  {
    name: "Marina Del Rey",
    marinaWebsite: "https://delreymarina.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: false,
    maxBoatSize: "",
    fullService: false,
  },
  {
    name: "Bridge Port Marina",
    marinaWebsite: "https://bridgeportmarina.ca",
    dayFee: "$30",
    summerPass: "$100",
    accommodation: false,
    restaurant: true,
    maxBoatSize: "45ft",
    fullService: true,
  },
  {
    name: "Blue Beacon Marina",
    marinaWebsite: "https://bluebeaconmarina.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: true,
    maxBoatSize: "26ft",
    fullService: false,
  },
  {
    name: "Port of Orillia",
    marinaWebsite: "https://www.orillia.com/port-of-orillia",
    dayFee: "FREE",
    summerPass: "Not available",
    accommodation: true,
    restaurant: true,
    maxBoatSize: "20ft",
    fullService: true,
  },
  {
    name: "Mariposa Landing",
    marinaWebsite: "http://mariposalanding.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: false,
    restaurant: "false",
    maxBoatSize: "20ft",
    fullService: true,
  },
  {
    name: "Lauderdale Point Marina & Resort Inc",
    marinaWebsite: "https://www.lauderdalepointmarina.com",
    dayFee: "Not available",
    summerPass: "Not available",
    accommodation: true,
    restaurant: false,
    maxBoatSize: "50ft",
    fullService: true,
  }]
;

function setMarkers(map) {
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

 infowindow = new google.maps.InfoWindow();


  for (var i = 0; i < marinas.length; i++) {
    position = new google.maps.LatLng(marinas[i][1], marinas[i][2]);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: image,
      shape: shape,
      title: marinas[i][0],
    });

    google.maps.event.addListener(marker, "click", (function(marker) {
      return function(evt) {
        var content = marker.getTitle();
        var body = "Website " + simcoe[0].marinaWebsite;
        console.log(body);
        console.log(typeof body);
        infowindow.setContent(`${content} ${body}`);
        infowindow.open(map, marker);
      };
    })(marker));
  }

}
