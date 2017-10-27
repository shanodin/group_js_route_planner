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

  var codeclan = new google.maps.LatLng(55.9445594, -3.1984787);
  var lalba = new google.maps.LatLng(55.9604718, -3.2035689);

  directionsService.route({
    origin: codeclan,
    destination: lalba,
    travelMode: google.maps.TravelMode.WALKING,
    waypoints: [{location: "Edinburgh Castle", stopover: true}, {location: "Waverley Station", stopover: true}, {location: "Palace of Holyroodhouse", stopover: true}, {location: "Scottish National Portrait Gallery", stopover: true}, {location: "Scottish National Gallery of Modern Art", stopover: true}, {location: "Arthur's Seat", stopover: true}, {location: "The Royal Scots Club", stopover: true}]
  }, function(response, status){
    directionsDisplay.setDirections(response)
  })
}

window.addEventListener("DOMContentLoaded", app);
