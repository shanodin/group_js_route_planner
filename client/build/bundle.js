/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var MapWrapper = __webpack_require__(1)
var Route = __webpack_require__(2)
var requestHelper = __webpack_require__(3)
// var dropdownMaker = require('./views/dropdownMaker.js')

var app = function () {
  renderMap()
  requestFlickr('edinburghnationalgallery')
  // setUpRouteList()
}

var renderMap = function () {
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
  directionsService = new google.maps.DirectionsService()
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: mainMap.googleMap,
    suppressMarkers: true
  })

  var origin = {lat: 55.9519361, lng: -3.1917565}
  var destination = {lat: 55.9519361, lng: -3.1917565}

  var route = new Route("Test Route", origin, destination)

  var waypoints = [{location: "Scott Monument", stopover: true},
  {location: "The Royal Scots Greys Monument", stopover: true},
  {location: "Ross Fountain", stopover: true},
  {location: {lat: 55.947641,lng: -3.200549}, stopover: true},
  {location: "Mary's Milk Bar", stopover: true},
  // {location: "Martyrs' Memorial", stopover: true},
  {location: "The Bow Bar", stopover: false},
  {location: "David Hume Statue", stopover: true},
  {location: "Bella Italia Edinburgh Northbridge", stopover: true}]



    waypoints.forEach(function(waypoint){route.addWaypoint(waypoint.location)})

    renderRoute(route)
    mainMap.addMarker(origin)
    mainMap.addMarker(destination)


  var waypoints = [{location: "Edinburgh Castle", stopover: true}, {location: "Waverley Station", stopover: true}, {location: "Scottish National Gallery of Modern Art", stopover: true}, {location: "The Royal Scots Club", stopover: true}]
  waypoints.forEach(function (waypoint) {route.addWaypoint(waypoint.location) })
  renderRoute(route)
}

var renderRoute = function (route) {
  directionsService.route({
    origin:  new google.maps.LatLng(route.origin),
    destination: route.destination,
    travelMode: google.maps.TravelMode.WALKING,
    waypoints: route.waypoints
  }, function (response, status) {
    directionsDisplay.setDirections(response)
  })
}

var requestFlickr = function (tag) {
  var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=56a4f5d0179598fb68c82a2f0973331f&text=" + tag + "&format=json&nojsoncallback=1"
  var request = new XMLHttpRequest()
  request.open("GET", url)
  request.addEventListener( "load", function () {
    var response = JSON.parse(this.responseText)
    var photo = response.photos.photo[0]
    var imageUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
    var photoDiv = document.querySelector('div#flickr-photo')
    var flickrImage = document.createElement("IMG")
    flickrImage.setAttribute('src', imageUrl)
    photoDiv.appendChild(flickrImage)
    console.log(imageUrl)
  })
  request.send()
}

// var setUpRouteList = function () {
//   // var url = 'http://localhost:3000/api/routes'
//   routesQueryHelper.all(function (routes) {
//     var routeNames = routes.map(function (route) {
//       return route.name
//     })
//     var routeSelect = document.querySelector('#route-select')
//     dropdownMaker.setUpDropDown(routeNames, routeSelect)
//   })
// }

window.addEventListener('DOMContentLoaded', app)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var MapWrapper = function (container) {
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 55.949768, lng: -3.197314},
    zoom: 15,
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
  })
  this.googleMap.setMapTypeId('roadmap')
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  var infoWindow = this.createInfoWindow(coords)
    marker.addListener('click', function() {
    infoWindow.open(marker.map, marker);

  })
  // this.markers.push(marker);
};

MapWrapper.prototype.createInfoWindow = function (coords) {
  var infoWindow = new google.maps.InfoWindow({
    content: "Latitude: " + coords.lat + " Longitude: " + coords.lng
    })
  return infoWindow
}

module.exports = MapWrapper


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Route = function (name, origin, destination) {
  this.name = name,
  this.origin = origin,
  this.destination = destination,
  this.waypoints = []
}

Route.prototype.addWaypoint = function (location) {
  var waypoint = {
    location: location,
    stopover: true
  }
  this.waypoints.push(waypoint)
}

module.exports = Route


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var requestHelper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parseO(jsonString)
      callback(data)
    })
    xhr.send()
  },

  postRequest: function (url, callback, payload) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var jsonString = JSON.stringify(payload)
    xhr.send(jsonString)
  }
}

module.exports = requestHelper


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map