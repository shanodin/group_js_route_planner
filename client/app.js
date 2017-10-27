var MapWrapper = require('./views/mapWrapper.js')

var app = function () {
  renderMap()
}

var renderMap = function () {
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
  directionsService = new google.maps.DirectionsService(),
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: mainMap.googleMap
  })
    renderRoute()
}

var codeclan = new google.maps.LatLng(55.9445594, -3.1984787);
var lalba = new google.maps.LatLng(55.9604718, -3.2035689);

var route = function (name, origin, destination) {
  this.name = name,
  this.origin = origin,
  this.destination = destination,
  this.waypoints = []
}

var renderRoute = function (route) {
  directionsService.route({
    origin:  new google.maps.LatLng(route.origin),
    destination: route.destination,
    travelMode: google.maps.TravelMode.WALKING,
    waypoints: route.waypoints
    }, function(response, status){
    directionsDisplay.setDirections(response)
  })
}

[{location: "Edinburgh Castle", stopover: true}, {location: "Waverley Station", stopover: true}, {location: "Scottish National Gallery of Modern Art", stopover: true}, {location: "The Royal Scots Club", stopover: true}]


window.addEventListener("DOMContentLoaded", app);
