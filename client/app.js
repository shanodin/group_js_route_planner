var MapWrapper = require('./views/mapWrapper.js')
var Route = require("./models/route.js")


var app = function () {
  renderMap()
  requestFlickr("edinburghnationalgallery")
}

var renderMap = function () {
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
  directionsService = new google.maps.DirectionsService(),
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

var requestFlickr = function(tag) {
    var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=56a4f5d0179598fb68c82a2f0973331f&text=" + tag + "&format=json&nojsoncallback=1"
    var request = new XMLHttpRequest()
    request.open( "GET", url );
    request.addEventListener( "load", function() {
    response = JSON.parse( this.responseText )
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




window.addEventListener("DOMContentLoaded", app);
