var MapWrapper = require('./views/mapWrapper.js')
var Route = require('./models/route.js')
var requestHelper = require('./helpers/request_helper.js')
var dropdownMaker = require('./views/dropdownMaker.js')
var flickrHelper = require('./helpers/flickr_helper.js')
var routeView = require('./views/route_view.js')
var autocompleteHelper = require('./helpers/autocomplete_helper.js')
var listRoutes = []

var app = function () {
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
  directionsService = new google.maps.DirectionsService()
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: mainMap.googleMap,
    suppressMarkers: true
  })

  var waypointSelect = document.querySelector("#waypoint-select")
  var url = 'http://localhost:3000/api/waypoints'
  requestHelper.getRequest(url, function (waypoints) {
    // dropdownMaker.setUpDropDown(waypoints, waypointSelect)
  var waypointHTwo = document.querySelector("#waypoint-h2")
    waypoints.forEach(function(waypoint){
    renderCheckBoxes(waypoint, waypointHTwo)
    })
  })

  var routeName = document.querySelector("#route-name")
  var originInput = document.querySelector("#origin-input")
  var destinationInput = document.querySelector("#destination-input")

  var saveButton = document.querySelector("#plan-route-btn")
  saveButton.addEventListener("click", function(){
    // console.log("Button clicked");
    var customRoute = new Route(routeName.value, originInput.value, destinationInput.value)
    // customRoute.addWaypoint(waypointSelect.value)
    // console.log("Route is created:", customRoute);
    requestHelper.postRequest("http://localhost:3000/api/routes", customRoute);
    routeView.setUpRouteList()
    routeView.renderRoute(customRoute, directionsService, directionsDisplay)
  })

  // waypointSelect.addEventListener("change", function(){
  // })



  routeView.setUpRouteList()

  var routeSelect = document.querySelector('#route-select')
  routeSelect.addEventListener('change', function () {
    findRoute(this.value);
  })
  //
  // var originInput = document.querySelector('#origin-input')
  // var destinationInput = document.querySelector('#destination-input')
  autocompleteHelper.takeUserInput(mainMap, originInput)
  autocompleteHelper.takeUserInput(mainMap, destinationInput)

}

var renderCheckBoxes = function (item, header) {
  var waypointLabel = document.createElement("label")
  waypointLabel.innerText = item.name;
  header.appendChild(waypointLabel)

  var waypoint = document.createElement("input");
  waypoint.setAttribute("type", "checkbox");
  waypoint.value = item.latLng;

  waypointLabel.appendChild(waypoint)
}

var findRoute = function(value){
  var url = "http://localhost:3000/api/routes/" + value
  requestHelper.findRequest(url, function(foundRoute){
    routeView.renderRoute(foundRoute[0], directionsService, directionsDisplay)
    // console.log(foundRoute[0].origin) returns a latlong object
    //function to loop through route waypoints
    //compare to database objects
    // map new array and add markers with appropriate info bubble
    console.log('request sent',foundRoute[0]);
  })
}






window.addEventListener('DOMContentLoaded', app)
