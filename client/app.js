var MapWrapper = require('./views/mapWrapper.js')
var Route = require('./models/route.js')
var requestHelper = require('./helpers/request_helper.js')
var dropdownMaker = require('./views/dropdownMaker.js')
var flickrHelper = require('./helpers/flickr_helper.js')
var routeView = require('./views/route_view.js')
var listRoutes = []

var app = function () {
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
  directionsService = new google.maps.DirectionsService()
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: mainMap.googleMap,
    suppressMarkers: true
  })

  routeView.setUpRouteList()

  var routeSelect = document.querySelector('#route-select')
  routeSelect.addEventListener('change', function () {
    findRoute(this.value);
  })
}

var findRoute = function(value){
  var url = "http://localhost:3000/api/routes/" + value
  requestHelper.find(url, function(foundRoute){
    routeView.renderRoute(foundRoute[0], directionsService, directionsDisplay)
    // console.log(foundRoute[0].origin) returns a latlong object
    //function to loop through route waypoints
    //compare to database objects
    // map new array and add markers with appropriate info bubble
    console.log('request sent',foundRoute[0]);
  })
}





window.addEventListener('DOMContentLoaded', app)
