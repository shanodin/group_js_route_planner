var MapWrapper = require('./views/mapWrapper.js')
var Route = require('./models/route.js')
var requestHelper = require('./helpers/request_helper.js')
var dropdownMaker = require('./views/dropdownMaker.js')
var flickrHelper = require('./helpers/flickr_helper.js')
var routeView = require('./views/route_view.js')
var autocompleteHelper = require('./helpers/autocomplete_helper.js')
var listRoutes = []

var app = function () {
  var customRoute = new Route (undefined, undefined, undefined)
  // create the map
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
  directionsService = new google.maps.DirectionsService()
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: mainMap.googleMap,
    suppressMarkers: true
  })
  // create the list of waypoints to choose from
  var waypointSelect = document.querySelector("#waypoint-select")
  var url = 'http://localhost:3000/api/waypoints'
  requestHelper.getRequest(url, function (waypoints) {
    var ul = document.querySelector("#waypoint-list")
    waypoints.forEach(function(waypoint){
    renderCheckBoxes(waypoint, ul)
    })
  })
  // creating a custom route
  var routeName = document.querySelector("#route-name")
  var originInput = document.querySelector("#origin-input")
  var destinationInput = document.querySelector("#destination-input")
  var saveButton = document.querySelector("#plan-route-btn")
  saveButton.addEventListener("click", function(){
    // console.log("Button clicked");
    customRoute.name = routeName.value
    customRoute.origin = originInput.value
    customRoute.destination = destinationInput.value
    // var customRoute = new Route(routeName.value, originInput.value, destinationInput.value)
    // console.log("Route is created:", customRoute);
    requestHelper.postRequest("http://localhost:3000/api/routes", customRoute);
    routeView.setUpRouteList()
    routeView.renderRoute(customRoute, directionsService, directionsDisplay)
  })
  // make the routes dropdown
  routeView.setUpRouteList()
  var routeSelect = document.querySelector('#route-select')
  routeSelect.addEventListener('change', function () {
    findRoute(this.value);
  })
  // add the cool autocomplete thing
  // var originInput = document.querySelector('#origin-input')
  // var destinationInput = document.querySelector('#destination-input')
  autocompleteHelper.takeUserInput(mainMap, originInput)
  autocompleteHelper.takeUserInput(mainMap, destinationInput)

  // render the boxes
  var renderCheckBoxes = function (item, ul) {
    var li = document.createElement("li")
    var waypointLabel = document.createElement("label")
    waypointLabel.innerText = item.name;
    li.appendChild(waypointLabel)
    var box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.value = item.latLng;
    box.addEventListener('change', function(event){
      // console.log(item);
      var waypoint = item.name


      if(this.checked){
      mainMap.addWaypointMarker(item.name)
      customRoute.addWaypoint(waypoint)
    } else{
      // mainMap.clearMarker(item.name)
      var filteredArray = customRoute.waypoints.filter(function (waypoint) {
        return waypoint.location !== item.name
      })
      customRoute.waypoints = filteredArray

      //search custom routes waypoint array
      //compare the waypoints location to the item.name(should return same)
      //get the index and use the index to splice out that waypoint from the array

    }

    })
    waypointLabel.appendChild(box)
    ul.appendChild(li)
  }
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
