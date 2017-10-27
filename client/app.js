var MapWrapper = require('./views/mapWrapper.js')
var Route = require("./models/route.js")

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
    var origin = {lat: 55.9445594, lng: -3.1984787}
    var destination = {lat:55.9604718, lng: -3.2035689}

    var route = new Route("Georgia", origin, destination)

    var waypoints = [{location: "Edinburgh Castle", stopover: true}, {location: "Waverley Station", stopover: true}, {location: "Scottish National Gallery of Modern Art", stopover: true}, {location: "The Royal Scots Club", stopover: true}]

    waypoints.forEach(function(waypoint){route.addWaypoint(waypoint.location)})

    renderRoute(route)

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



window.addEventListener("DOMContentLoaded", app);
