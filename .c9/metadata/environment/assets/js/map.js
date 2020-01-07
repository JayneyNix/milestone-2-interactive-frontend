{"changed":true,"filter":false,"title":"map.js","tooltip":"/assets/js/map.js","value":"// Initialize map and set marker locations and icon\n\nfunction initMap() {\n  var map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 9,\n    center: { lat: 44.434546, lng: -79.350972 }\n\n  });\n\n  setMarkers(map);\n}\n\nvar marinas = [\n  ['Island Grove Marina', 44.302020, -79.472088],\n  ['Krates Marina Ltd', 44.225097, -79.465745],\n\n  ['Willow Beach Marina', 44.308918, -79.437413],\n  ['Virginia Beach Marina', 44.327637, -79.287490],\n\n  ['Cooks Bay Marina', 44.225448, -79.532250],\n  ['Lefroy Harbour Resorts', 44.256730, -79.540350],\n\n  ['Friday Harbour Resort', 44.391659, -79.525531],\n  ['Barrie City Marina', 44.385429, -79.690452],\n\n  ['Lake Simcoe Marine', 44.270579, -79.540305],\n  ['Kon Tiki Marine', 44.228860, -79.531020],\n\n  ['Coves of Keswick', 44.227932, -79.458148],\n  ['Keswick Marine Ltd', 44.228393, -79.465250],\n\n  ['Monto Reno Marina Limited', 44.264661, -79.544191],\n  ['Trent Talbot Marina', 44.477527, -79.153965],\n\n  ['Marina Del Rey', 44.577239, -79.322960],\n  ['Bridge Port Marina', 44.607499, -79.372620],\n\n  ['Blue Beacon Marina', 44.603249, -79.367925],\n  ['Port of Orillia', 44.612924, -79.413152],\n\n  ['Mariposa Landing', 44.606715, -79.371680],\n  ['Lauderdale Point Marina & Resort Inc', 44.796297, -79.393036],\n];\n\n\nfunction setMarkers(map) {\n  var image = {\n    url: 'assets/images/anchor-map-icon.png',\n    size: new google.maps.Size(25, 25),\n    origin: new google.maps.Point(0, 0),\n    anchor: new google.maps.Point(0, 0)\n  };\n\n  var shape = {\n    coords: [1, 1, 1, 20, 18, 20, 18, 1],\n    type: 'poly'\n  };\n\n infowindow = new google.maps.InfoWindow();\n\n\n  for (var i = 0; i < marinas.length; i++) {\n    position = new google.maps.LatLng(marinas[i][1], marinas[i][2]);\n    marker = new google.maps.Marker({\n      position: position,\n      map: map,\n      icon: image,\n      shape: shape,\n      title: marinas[i][0],\n    });\n\n    google.maps.event.addListener(marker, \"click\", (function(marker) {\n      return function(evt) {\n        var content = marker.getTitle();\n        var body = \"Website \" + simcoe[0].marinaWebsite;\n        console.log(body);\n        console.log(typeof body);\n        infowindow.setContent(`${content} ${body}`);\n        infowindow.open(map, marker);\n      };\n    })(marker));\n  }\n\n}\n","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":245,"column":0},"end":{"row":245,"column":1},"action":"remove","lines":["]"],"id":3266}],[{"start":{"row":44,"column":13},"end":{"row":44,"column":15},"action":"insert","lines":["[]"],"id":3267}],[{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"remove","lines":["]"],"id":3268}],[{"start":{"row":244,"column":2},"end":{"row":244,"column":3},"action":"insert","lines":["]"],"id":3269}],[{"start":{"row":244,"column":2},"end":{"row":244,"column":3},"action":"remove","lines":["]"],"id":3270}],[{"start":{"row":244,"column":3},"end":{"row":244,"column":4},"action":"insert","lines":["]"],"id":3271}],[{"start":{"row":276,"column":19},"end":{"row":276,"column":53},"action":"remove","lines":["simcoe.name + simcoe.marinaWebsite"],"id":3272},{"start":{"row":276,"column":19},"end":{"row":276,"column":20},"action":"insert","lines":["d"]},{"start":{"row":276,"column":20},"end":{"row":276,"column":21},"action":"insert","lines":["i"]},{"start":{"row":276,"column":21},"end":{"row":276,"column":22},"action":"insert","lines":["s"]},{"start":{"row":276,"column":22},"end":{"row":276,"column":23},"action":"insert","lines":["p"]},{"start":{"row":276,"column":23},"end":{"row":276,"column":24},"action":"insert","lines":["l"]},{"start":{"row":276,"column":24},"end":{"row":276,"column":25},"action":"insert","lines":["a"]},{"start":{"row":276,"column":25},"end":{"row":276,"column":26},"action":"insert","lines":["y"]},{"start":{"row":276,"column":26},"end":{"row":276,"column":27},"action":"insert","lines":["S"]},{"start":{"row":276,"column":27},"end":{"row":276,"column":28},"action":"insert","lines":["i"]}],[{"start":{"row":276,"column":28},"end":{"row":276,"column":29},"action":"insert","lines":["m"],"id":3273},{"start":{"row":276,"column":29},"end":{"row":276,"column":30},"action":"insert","lines":["c"]},{"start":{"row":276,"column":30},"end":{"row":276,"column":31},"action":"insert","lines":["o"]},{"start":{"row":276,"column":31},"end":{"row":276,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":276,"column":32},"end":{"row":276,"column":34},"action":"insert","lines":["()"],"id":3274}],[{"start":{"row":245,"column":1},"end":{"row":246,"column":0},"action":"insert","lines":["",""],"id":3275},{"start":{"row":246,"column":0},"end":{"row":247,"column":0},"action":"insert","lines":["",""]},{"start":{"row":247,"column":0},"end":{"row":247,"column":1},"action":"insert","lines":["f"]}],[{"start":{"row":247,"column":1},"end":{"row":247,"column":2},"action":"insert","lines":["u"],"id":3276},{"start":{"row":247,"column":2},"end":{"row":247,"column":3},"action":"insert","lines":["n"]},{"start":{"row":247,"column":3},"end":{"row":247,"column":4},"action":"insert","lines":["c"]},{"start":{"row":247,"column":4},"end":{"row":247,"column":5},"action":"insert","lines":["t"]},{"start":{"row":247,"column":5},"end":{"row":247,"column":6},"action":"insert","lines":["i"]},{"start":{"row":247,"column":6},"end":{"row":247,"column":7},"action":"insert","lines":["o"]},{"start":{"row":247,"column":7},"end":{"row":247,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":247,"column":8},"end":{"row":247,"column":9},"action":"insert","lines":[" "],"id":3277}],[{"start":{"row":247,"column":9},"end":{"row":247,"column":11},"action":"insert","lines":["()"],"id":3278}],[{"start":{"row":247,"column":9},"end":{"row":247,"column":10},"action":"insert","lines":["d"],"id":3279},{"start":{"row":247,"column":10},"end":{"row":247,"column":11},"action":"insert","lines":["i"]},{"start":{"row":247,"column":11},"end":{"row":247,"column":12},"action":"insert","lines":["p"]}],[{"start":{"row":247,"column":11},"end":{"row":247,"column":12},"action":"remove","lines":["p"],"id":3280}],[{"start":{"row":247,"column":11},"end":{"row":247,"column":12},"action":"insert","lines":["s"],"id":3281},{"start":{"row":247,"column":12},"end":{"row":247,"column":13},"action":"insert","lines":["p"]},{"start":{"row":247,"column":13},"end":{"row":247,"column":14},"action":"insert","lines":["l"]},{"start":{"row":247,"column":14},"end":{"row":247,"column":15},"action":"insert","lines":["a"]}],[{"start":{"row":247,"column":9},"end":{"row":247,"column":15},"action":"remove","lines":["displa"],"id":3282},{"start":{"row":247,"column":9},"end":{"row":247,"column":22},"action":"insert","lines":["displaySimcoe"]}],[{"start":{"row":247,"column":24},"end":{"row":247,"column":25},"action":"insert","lines":[" "],"id":3283},{"start":{"row":247,"column":25},"end":{"row":247,"column":26},"action":"insert","lines":["{"]}],[{"start":{"row":247,"column":26},"end":{"row":249,"column":1},"action":"insert","lines":["","  ","}"],"id":3284}],[{"start":{"row":248,"column":2},"end":{"row":248,"column":3},"action":"insert","lines":["v"],"id":3285},{"start":{"row":248,"column":3},"end":{"row":248,"column":4},"action":"insert","lines":["a"]},{"start":{"row":248,"column":4},"end":{"row":248,"column":5},"action":"insert","lines":["r"]}],[{"start":{"row":248,"column":5},"end":{"row":248,"column":6},"action":"insert","lines":[" "],"id":3286},{"start":{"row":248,"column":6},"end":{"row":248,"column":7},"action":"insert","lines":["r"]},{"start":{"row":248,"column":7},"end":{"row":248,"column":8},"action":"insert","lines":["e"]},{"start":{"row":248,"column":8},"end":{"row":248,"column":9},"action":"insert","lines":["s"]},{"start":{"row":248,"column":9},"end":{"row":248,"column":10},"action":"insert","lines":["u"]},{"start":{"row":248,"column":10},"end":{"row":248,"column":11},"action":"insert","lines":["l"]},{"start":{"row":248,"column":11},"end":{"row":248,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":248,"column":12},"end":{"row":248,"column":13},"action":"insert","lines":[" "],"id":3287},{"start":{"row":248,"column":13},"end":{"row":248,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":248,"column":14},"end":{"row":248,"column":15},"action":"insert","lines":[" "],"id":3288}],[{"start":{"row":248,"column":15},"end":{"row":248,"column":17},"action":"insert","lines":["\"\""],"id":3289}],[{"start":{"row":248,"column":16},"end":{"row":248,"column":17},"action":"insert","lines":["M"],"id":3290},{"start":{"row":248,"column":17},"end":{"row":248,"column":18},"action":"insert","lines":["a"]},{"start":{"row":248,"column":18},"end":{"row":248,"column":19},"action":"insert","lines":["r"]},{"start":{"row":248,"column":19},"end":{"row":248,"column":20},"action":"insert","lines":["i"]},{"start":{"row":248,"column":20},"end":{"row":248,"column":21},"action":"insert","lines":["n"]},{"start":{"row":248,"column":21},"end":{"row":248,"column":22},"action":"insert","lines":["a"]}],[{"start":{"row":248,"column":22},"end":{"row":248,"column":23},"action":"insert","lines":[" "],"id":3291},{"start":{"row":248,"column":23},"end":{"row":248,"column":24},"action":"insert","lines":["N"]},{"start":{"row":248,"column":24},"end":{"row":248,"column":25},"action":"insert","lines":["a"]},{"start":{"row":248,"column":25},"end":{"row":248,"column":26},"action":"insert","lines":["m"]},{"start":{"row":248,"column":26},"end":{"row":248,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":248,"column":28},"end":{"row":248,"column":29},"action":"insert","lines":[" "],"id":3292}],[{"start":{"row":248,"column":15},"end":{"row":248,"column":16},"action":"remove","lines":["\""],"id":3293}],[{"start":{"row":248,"column":15},"end":{"row":248,"column":16},"action":"insert","lines":["'"],"id":3294}],[{"start":{"row":248,"column":28},"end":{"row":248,"column":29},"action":"remove","lines":[" "],"id":3295},{"start":{"row":248,"column":27},"end":{"row":248,"column":28},"action":"remove","lines":["\""]}],[{"start":{"row":248,"column":27},"end":{"row":248,"column":28},"action":"insert","lines":[" "],"id":3296}],[{"start":{"row":248,"column":28},"end":{"row":248,"column":29},"action":"insert","lines":["$"],"id":3297}],[{"start":{"row":248,"column":29},"end":{"row":248,"column":31},"action":"insert","lines":["()"],"id":3298}],[{"start":{"row":248,"column":30},"end":{"row":248,"column":31},"action":"insert","lines":["t"],"id":3299},{"start":{"row":248,"column":31},"end":{"row":248,"column":32},"action":"insert","lines":["h"]},{"start":{"row":248,"column":32},"end":{"row":248,"column":33},"action":"insert","lines":["i"]},{"start":{"row":248,"column":33},"end":{"row":248,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":248,"column":34},"end":{"row":248,"column":35},"action":"insert","lines":["."],"id":3300},{"start":{"row":248,"column":35},"end":{"row":248,"column":36},"action":"insert","lines":["n"]},{"start":{"row":248,"column":36},"end":{"row":248,"column":37},"action":"insert","lines":["a"]},{"start":{"row":248,"column":37},"end":{"row":248,"column":38},"action":"insert","lines":["m"]},{"start":{"row":248,"column":38},"end":{"row":248,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":248,"column":40},"end":{"row":248,"column":41},"action":"insert","lines":[" "],"id":3301},{"start":{"row":248,"column":41},"end":{"row":248,"column":42},"action":"insert","lines":["+"]}],[{"start":{"row":248,"column":42},"end":{"row":248,"column":43},"action":"insert","lines":[" "],"id":3302}],[{"start":{"row":248,"column":27},"end":{"row":248,"column":28},"action":"insert","lines":["'"],"id":3303}],[{"start":{"row":248,"column":28},"end":{"row":248,"column":29},"action":"insert","lines":[" "],"id":3304},{"start":{"row":248,"column":29},"end":{"row":248,"column":30},"action":"insert","lines":["="]}],[{"start":{"row":248,"column":30},"end":{"row":248,"column":31},"action":"insert","lines":[" "],"id":3305}],[{"start":{"row":248,"column":30},"end":{"row":248,"column":31},"action":"remove","lines":[" "],"id":3306},{"start":{"row":248,"column":29},"end":{"row":248,"column":30},"action":"remove","lines":["="]}],[{"start":{"row":248,"column":29},"end":{"row":248,"column":30},"action":"insert","lines":["+"],"id":3307}],[{"start":{"row":248,"column":46},"end":{"row":248,"column":47},"action":"insert","lines":["M"],"id":3308},{"start":{"row":248,"column":47},"end":{"row":248,"column":48},"action":"insert","lines":["a"]},{"start":{"row":248,"column":48},"end":{"row":248,"column":49},"action":"insert","lines":["r"]},{"start":{"row":248,"column":49},"end":{"row":248,"column":50},"action":"insert","lines":["i"]},{"start":{"row":248,"column":50},"end":{"row":248,"column":51},"action":"insert","lines":["n"]},{"start":{"row":248,"column":51},"end":{"row":248,"column":52},"action":"insert","lines":["a"]}],[{"start":{"row":248,"column":51},"end":{"row":248,"column":52},"action":"remove","lines":["a"],"id":3309},{"start":{"row":248,"column":50},"end":{"row":248,"column":51},"action":"remove","lines":["n"]},{"start":{"row":248,"column":49},"end":{"row":248,"column":50},"action":"remove","lines":["i"]},{"start":{"row":248,"column":48},"end":{"row":248,"column":49},"action":"remove","lines":["r"]},{"start":{"row":248,"column":47},"end":{"row":248,"column":48},"action":"remove","lines":["a"]},{"start":{"row":248,"column":46},"end":{"row":248,"column":47},"action":"remove","lines":["M"]}],[{"start":{"row":248,"column":46},"end":{"row":248,"column":48},"action":"insert","lines":["''"],"id":3310}],[{"start":{"row":248,"column":47},"end":{"row":248,"column":48},"action":"insert","lines":["M"],"id":3311},{"start":{"row":248,"column":48},"end":{"row":248,"column":49},"action":"insert","lines":["a"]},{"start":{"row":248,"column":49},"end":{"row":248,"column":50},"action":"insert","lines":["r"]},{"start":{"row":248,"column":50},"end":{"row":248,"column":51},"action":"insert","lines":["i"]},{"start":{"row":248,"column":51},"end":{"row":248,"column":52},"action":"insert","lines":["n"]},{"start":{"row":248,"column":52},"end":{"row":248,"column":53},"action":"insert","lines":["a"]}],[{"start":{"row":248,"column":53},"end":{"row":248,"column":54},"action":"insert","lines":[" "],"id":3312},{"start":{"row":248,"column":54},"end":{"row":248,"column":55},"action":"insert","lines":["W"]},{"start":{"row":248,"column":55},"end":{"row":248,"column":56},"action":"insert","lines":["e"]},{"start":{"row":248,"column":56},"end":{"row":248,"column":57},"action":"insert","lines":["b"]},{"start":{"row":248,"column":57},"end":{"row":248,"column":58},"action":"insert","lines":["s"]},{"start":{"row":248,"column":58},"end":{"row":248,"column":59},"action":"insert","lines":["i"]},{"start":{"row":248,"column":59},"end":{"row":248,"column":60},"action":"insert","lines":["t"]},{"start":{"row":248,"column":60},"end":{"row":248,"column":61},"action":"insert","lines":["e"]}],[{"start":{"row":248,"column":62},"end":{"row":248,"column":63},"action":"insert","lines":[" "],"id":3313},{"start":{"row":248,"column":63},"end":{"row":248,"column":64},"action":"insert","lines":["+"]}],[{"start":{"row":248,"column":64},"end":{"row":248,"column":65},"action":"insert","lines":[" "],"id":3314},{"start":{"row":248,"column":65},"end":{"row":248,"column":66},"action":"insert","lines":["$"]},{"start":{"row":248,"column":66},"end":{"row":248,"column":67},"action":"insert","lines":["t"]}],[{"start":{"row":248,"column":67},"end":{"row":248,"column":68},"action":"insert","lines":["h"],"id":3315},{"start":{"row":248,"column":68},"end":{"row":248,"column":69},"action":"insert","lines":["i"]},{"start":{"row":248,"column":69},"end":{"row":248,"column":70},"action":"insert","lines":["s"]},{"start":{"row":248,"column":70},"end":{"row":248,"column":71},"action":"insert","lines":["."]},{"start":{"row":248,"column":71},"end":{"row":248,"column":72},"action":"insert","lines":["m"]},{"start":{"row":248,"column":72},"end":{"row":248,"column":73},"action":"insert","lines":["a"]},{"start":{"row":248,"column":73},"end":{"row":248,"column":74},"action":"insert","lines":["r"]},{"start":{"row":248,"column":74},"end":{"row":248,"column":75},"action":"insert","lines":["i"]},{"start":{"row":248,"column":75},"end":{"row":248,"column":76},"action":"insert","lines":["n"]},{"start":{"row":248,"column":76},"end":{"row":248,"column":77},"action":"insert","lines":["a"]}],[{"start":{"row":248,"column":71},"end":{"row":248,"column":77},"action":"remove","lines":["marina"],"id":3316},{"start":{"row":248,"column":71},"end":{"row":248,"column":84},"action":"insert","lines":["marinaWebsite"]}],[{"start":{"row":248,"column":27},"end":{"row":248,"column":28},"action":"remove","lines":["'"],"id":3317}],[{"start":{"row":248,"column":60},"end":{"row":248,"column":61},"action":"remove","lines":["'"],"id":3318}],[{"start":{"row":248,"column":45},"end":{"row":248,"column":46},"action":"remove","lines":["'"],"id":3319}],[{"start":{"row":248,"column":63},"end":{"row":248,"column":64},"action":"insert","lines":["("],"id":3320}],[{"start":{"row":248,"column":82},"end":{"row":248,"column":83},"action":"insert","lines":[")"],"id":3321},{"start":{"row":248,"column":83},"end":{"row":248,"column":84},"action":"insert","lines":["'"]}],[{"start":{"row":248,"column":84},"end":{"row":248,"column":85},"action":"insert","lines":[";"],"id":3322}],[{"start":{"row":249,"column":1},"end":{"row":250,"column":0},"action":"insert","lines":["",""],"id":3323},{"start":{"row":250,"column":0},"end":{"row":251,"column":0},"action":"insert","lines":["",""]},{"start":{"row":251,"column":0},"end":{"row":251,"column":1},"action":"insert","lines":["t"]},{"start":{"row":251,"column":1},"end":{"row":251,"column":2},"action":"insert","lines":["h"]},{"start":{"row":251,"column":2},"end":{"row":251,"column":3},"action":"insert","lines":["i"]},{"start":{"row":251,"column":3},"end":{"row":251,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":251,"column":4},"end":{"row":251,"column":5},"action":"insert","lines":["."],"id":3324},{"start":{"row":251,"column":5},"end":{"row":251,"column":6},"action":"insert","lines":["d"]},{"start":{"row":251,"column":6},"end":{"row":251,"column":7},"action":"insert","lines":["i"]},{"start":{"row":251,"column":7},"end":{"row":251,"column":8},"action":"insert","lines":["s"]},{"start":{"row":251,"column":8},"end":{"row":251,"column":9},"action":"insert","lines":["p"]},{"start":{"row":251,"column":9},"end":{"row":251,"column":10},"action":"insert","lines":["l"]},{"start":{"row":251,"column":10},"end":{"row":251,"column":11},"action":"insert","lines":["a"]}],[{"start":{"row":251,"column":5},"end":{"row":251,"column":11},"action":"remove","lines":["displa"],"id":3325},{"start":{"row":251,"column":5},"end":{"row":251,"column":20},"action":"insert","lines":["displaySimcoe()"]}],[{"start":{"row":251,"column":19},"end":{"row":251,"column":20},"action":"remove","lines":[")"],"id":3326},{"start":{"row":251,"column":18},"end":{"row":251,"column":19},"action":"remove","lines":["("]}],[{"start":{"row":251,"column":18},"end":{"row":251,"column":19},"action":"insert","lines":[" "],"id":3327},{"start":{"row":251,"column":19},"end":{"row":251,"column":20},"action":"insert","lines":["="]}],[{"start":{"row":251,"column":20},"end":{"row":251,"column":21},"action":"insert","lines":[" "],"id":3328},{"start":{"row":251,"column":21},"end":{"row":251,"column":22},"action":"insert","lines":["d"]},{"start":{"row":251,"column":22},"end":{"row":251,"column":23},"action":"insert","lines":["i"]},{"start":{"row":251,"column":23},"end":{"row":251,"column":24},"action":"insert","lines":["s"]},{"start":{"row":251,"column":24},"end":{"row":251,"column":25},"action":"insert","lines":["p"]}],[{"start":{"row":251,"column":25},"end":{"row":251,"column":26},"action":"insert","lines":["l"],"id":3329},{"start":{"row":251,"column":26},"end":{"row":251,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":251,"column":21},"end":{"row":251,"column":27},"action":"remove","lines":["displa"],"id":3330},{"start":{"row":251,"column":21},"end":{"row":251,"column":36},"action":"insert","lines":["displaySimcoe()"]}],[{"start":{"row":251,"column":34},"end":{"row":251,"column":36},"action":"remove","lines":["()"],"id":3331}],[{"start":{"row":251,"column":34},"end":{"row":251,"column":35},"action":"insert","lines":[";"],"id":3332}],[{"start":{"row":247,"column":0},"end":{"row":251,"column":35},"action":"remove","lines":["function displaySimcoe() {","  var result = 'Marina Name + $(this.name) + Marina Website + $(this.marinaWebsite)';","}","","this.displaySimcoe = displaySimcoe;"],"id":3333},{"start":{"row":246,"column":0},"end":{"row":247,"column":0},"action":"remove","lines":["",""]},{"start":{"row":245,"column":1},"end":{"row":246,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":56,"column":9},"end":{"row":56,"column":10},"action":"remove","lines":["\""],"id":3334}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"remove","lines":["\""],"id":3335}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":5},"action":"remove","lines":["\""],"id":3336}],[{"start":{"row":57,"column":17},"end":{"row":57,"column":18},"action":"remove","lines":["\""],"id":3337}],[{"start":{"row":46,"column":4},"end":{"row":46,"column":5},"action":"remove","lines":["'"],"id":3338}],[{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"remove","lines":["'"],"id":3339}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"remove","lines":["{"],"id":3340}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":4},"action":"insert","lines":["[]"],"id":3341}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":4},"action":"remove","lines":["[]"],"id":3342}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":["{"],"id":3343}],[{"start":{"row":46,"column":8},"end":{"row":46,"column":9},"action":"remove","lines":["'"],"id":3344}],[{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"remove","lines":["'"],"id":3345}],[{"start":{"row":276,"column":19},"end":{"row":276,"column":34},"action":"remove","lines":["displaySimcoe()"],"id":3346}],[{"start":{"row":276,"column":19},"end":{"row":276,"column":20},"action":"insert","lines":["s"],"id":3347},{"start":{"row":276,"column":20},"end":{"row":276,"column":21},"action":"insert","lines":["i"]},{"start":{"row":276,"column":21},"end":{"row":276,"column":22},"action":"insert","lines":["m"]},{"start":{"row":276,"column":22},"end":{"row":276,"column":23},"action":"insert","lines":["c"]},{"start":{"row":276,"column":23},"end":{"row":276,"column":24},"action":"insert","lines":["o"]},{"start":{"row":276,"column":24},"end":{"row":276,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":276,"column":25},"end":{"row":276,"column":26},"action":"insert","lines":["."],"id":3348},{"start":{"row":276,"column":26},"end":{"row":276,"column":27},"action":"insert","lines":["m"]},{"start":{"row":276,"column":27},"end":{"row":276,"column":28},"action":"insert","lines":["a"]},{"start":{"row":276,"column":28},"end":{"row":276,"column":29},"action":"insert","lines":["r"]},{"start":{"row":276,"column":29},"end":{"row":276,"column":30},"action":"insert","lines":["i"]},{"start":{"row":276,"column":30},"end":{"row":276,"column":31},"action":"insert","lines":["n"]},{"start":{"row":276,"column":31},"end":{"row":276,"column":32},"action":"insert","lines":["a"]}],[{"start":{"row":276,"column":26},"end":{"row":276,"column":32},"action":"remove","lines":["marina"],"id":3349},{"start":{"row":276,"column":26},"end":{"row":276,"column":39},"action":"insert","lines":["marinaWebsite"]}],[{"start":{"row":276,"column":25},"end":{"row":276,"column":27},"action":"insert","lines":["[]"],"id":3350}],[{"start":{"row":276,"column":26},"end":{"row":276,"column":27},"action":"insert","lines":["0"],"id":3351}],[{"start":{"row":276,"column":19},"end":{"row":276,"column":20},"action":"insert","lines":["\""],"id":3352},{"start":{"row":276,"column":20},"end":{"row":276,"column":21},"action":"insert","lines":["\""]}],[{"start":{"row":276,"column":20},"end":{"row":276,"column":21},"action":"insert","lines":["W"],"id":3353},{"start":{"row":276,"column":21},"end":{"row":276,"column":22},"action":"insert","lines":["e"]},{"start":{"row":276,"column":22},"end":{"row":276,"column":23},"action":"insert","lines":["b"]},{"start":{"row":276,"column":23},"end":{"row":276,"column":24},"action":"insert","lines":["s"]},{"start":{"row":276,"column":24},"end":{"row":276,"column":25},"action":"insert","lines":["i"]},{"start":{"row":276,"column":25},"end":{"row":276,"column":26},"action":"insert","lines":["t"]},{"start":{"row":276,"column":26},"end":{"row":276,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":276,"column":27},"end":{"row":276,"column":28},"action":"insert","lines":[" "],"id":3354}],[{"start":{"row":276,"column":27},"end":{"row":276,"column":28},"action":"remove","lines":[" "],"id":3355}],[{"start":{"row":276,"column":28},"end":{"row":276,"column":29},"action":"insert","lines":[" "],"id":3356},{"start":{"row":276,"column":29},"end":{"row":276,"column":30},"action":"insert","lines":["+"]}],[{"start":{"row":276,"column":30},"end":{"row":276,"column":31},"action":"insert","lines":[" "],"id":3357}],[{"start":{"row":276,"column":31},"end":{"row":276,"column":32},"action":"insert","lines":["\""],"id":3358}],[{"start":{"row":276,"column":32},"end":{"row":276,"column":33},"action":"insert","lines":[" "],"id":3359},{"start":{"row":276,"column":33},"end":{"row":276,"column":34},"action":"insert","lines":["\""]}],[{"start":{"row":276,"column":34},"end":{"row":276,"column":35},"action":"insert","lines":[" "],"id":3360},{"start":{"row":276,"column":35},"end":{"row":276,"column":36},"action":"insert","lines":["+"]}],[{"start":{"row":276,"column":36},"end":{"row":276,"column":37},"action":"insert","lines":[" "],"id":3361}],[{"start":{"row":276,"column":36},"end":{"row":276,"column":37},"action":"remove","lines":[" "],"id":3362},{"start":{"row":276,"column":35},"end":{"row":276,"column":36},"action":"remove","lines":["+"]},{"start":{"row":276,"column":34},"end":{"row":276,"column":35},"action":"remove","lines":[" "]}],[{"start":{"row":276,"column":34},"end":{"row":276,"column":35},"action":"insert","lines":[" "],"id":3363}],[{"start":{"row":276,"column":33},"end":{"row":276,"column":34},"action":"remove","lines":["\""],"id":3364},{"start":{"row":276,"column":32},"end":{"row":276,"column":33},"action":"remove","lines":[" "]},{"start":{"row":276,"column":31},"end":{"row":276,"column":32},"action":"remove","lines":["\""]},{"start":{"row":276,"column":30},"end":{"row":276,"column":31},"action":"remove","lines":[" "]}],[{"start":{"row":276,"column":27},"end":{"row":276,"column":28},"action":"insert","lines":[" "],"id":3365}],[{"start":{"row":44,"column":0},"end":{"row":245,"column":1},"action":"remove","lines":["var simcoe = [","  {","    name: \"Island Grove\",","    marinaWebsite: \"https://www.islandgrovemarina.com\",","    dayFee: \"$25\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"22ft\",","    fullService: false,","  },","  {","    name: \"Krates Marina Ltd\",","    marinaWebsite: \"https://www.kratesmarina.com/marina-services\",","    dayFee: \"$20\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"20ft\",","    fullService: false,","  },","  {","    name: \"Willow Beach Marina\",","    marinaWebsite: \"None\",","    dayFee: \"Season Pass Only\",","    summerPass: \"$200\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"23ft\",","    fullService: false,","  },","  {","    name: \"Virginia Beach Marina\",","    marinaWebsite: \"https://virginiabeach-marina.com\",","    dayFee: \"$25\",","    summerPass: \"Not available\",","    accommodation: false,","    restuarant: true,","    maxBoatSize: \"33ft\",","    fullService: false,","  },","  {","    name: \"Cooks Bay Marina\",","    marinaWebsite: \"http://www.cooksbaymarina.com\",","    dayFee: \"$35\",","    summerPass: \"$260\",","    accommodation: false,","    restaurant: true,","    maxBoatSize: \"30ft\",","    fullService: false,","  },","  {","    name: \"Lefroy Harbour Resorts\",","    marinaWebsite: \"http://www.lefroyharbour.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: true,","    maxBoatSize: \"60ft\",","    fullService: true,","  },","  {","    name: \"Friday Harbour Resort\",","    marinaWebsite: \"https://www.fridayharbour.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: true,","    restaurant: true,","    maxBoatSize: \"60ft\",","    fullService: true,","  },","  {","    name: \"Barrie City Marina\",","    marinaWebsite: \"https://www.barrie.ca/Living/ParksTrails/Waterfront/Pages/Marina.aspx\",","    dayFee: \"$17.70 + HST\",","    summerPass: \"$177\",","    accommodation: true,","    restaurant: true,","    maxBoatSize: \"60ft\",","    fullService: false,","  },","  {","    name: \"Lake Simcoe Marine\",","    marinaWebsite: \"https://www.lakesimcoemarine.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"25ft\",","    fullService: false,","  },","  {","    name: \"Kon Tiki Marine\",","    marinaWebsite: \"http://www.lefroyharbour.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"46ft\",","    fullService: true,","  },","  {","    name: \"Coves of Keswick\",","    marinaWebsite: \"http://www.lakesimcoemarina.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: false,","   maxBoatSize: \"21ft\",","    fullService: false,","  },","  {","    name: \"Keswick Marine Ltd\",","    marinaWebsite: \"http://www.keswickmarine.com\",","    dayFee: \"Season Pass Only\",","    summerPass: \"$225\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"30ft\",","    fullService: true,","  },","  {","    name: \"Monto Reno Marina Limited\",","    marinaWebsite: \"https://www.montoreno.com\",","    dayFee: \"$17 - $45 (based on boat size)\",","    summerPass: \"$265 up to 21ft\",","    accommodation: false,","    restaurant: true,","    maxBoatSize: \"38ft\",","    fullService: false,","  },","  {","    name: \"Trent Talbot Marina\",","    marinaWebsite: \"http://www.trenttalbotmarina.com\",","    dayFee: \"$10\",","    summerPass: \"$485\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"45ft\",","    fullService: false,","  },","  {","    name: \"Marina Del Rey\",","    marinaWebsite: \"https://delreymarina.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: false,","    maxBoatSize: \"\",","    fullService: false,","  },","  {","    name: \"Bridge Port Marina\",","    marinaWebsite: \"https://bridgeportmarina.ca\",","    dayFee: \"$30\",","    summerPass: \"$100\",","    accommodation: false,","    restaurant: true,","    maxBoatSize: \"45ft\",","    fullService: true,","  },","  {","    name: \"Blue Beacon Marina\",","    marinaWebsite: \"https://bluebeaconmarina.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: true,","    maxBoatSize: \"26ft\",","    fullService: false,","  },","  {","    name: \"Port of Orillia\",","    marinaWebsite: \"https://www.orillia.com/port-of-orillia\",","    dayFee: \"FREE\",","    summerPass: \"Not available\",","    accommodation: true,","    restaurant: true,","    maxBoatSize: \"20ft\",","    fullService: true,","  },","  {","    name: \"Mariposa Landing\",","    marinaWebsite: \"http://mariposalanding.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: false,","    restaurant: \"false\",","    maxBoatSize: \"20ft\",","    fullService: true,","  },","  {","    name: \"Lauderdale Point Marina & Resort Inc\",","    marinaWebsite: \"https://www.lauderdalepointmarina.com\",","    dayFee: \"Not available\",","    summerPass: \"Not available\",","    accommodation: true,","    restaurant: false,","    maxBoatSize: \"50ft\",","    fullService: true,","  }]",";"],"id":3366},{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":252,"scrollleft":0,"selection":{"start":{"row":43,"column":0},"end":{"row":43,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":17,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1578409480734}