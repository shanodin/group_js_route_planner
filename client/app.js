var MapWrapper = require('./views/mapWrapper.js')
var Route = require('./models/route.js')
var requestHelper = require('./helpers/request_helper.js')
var dropdownMaker = require('./views/dropdownMaker.js')
var waypointViewer = require('./views/waypoint_view.js')
var flickrHelper = require('./helpers/flickr_helper.js')
var routeView = require('./views/route_view.js')
var autocompleteHelper = require('./helpers/autocomplete_helper.js')
var weatherHelper = require('./helpers/weather_helper.js')
var saveButtonListener = require('./helpers/save_button_helper.js')
var waypointButtonListeners = require('./views/waypoint_type_viewer.js')

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

  //Save button listener
  saveButtonListener(customRoute)

  // make the routes dropdown
  routeView.setUpRouteList()
  var routeSelect = document.querySelector('#route-select')
  routeSelect.addEventListener('change', function () {
    findRoute(this.value, mainMap)
  })

  // add the cool autocomplete thing
  var originInput = document.querySelector('#origin-input')
  var destinationInput = document.querySelector('#destination-input')
  autocompleteHelper.takeUserInput(mainMap, originInput)
  autocompleteHelper.takeUserInput(mainMap, destinationInput)

  waypointViewer.getWaypointsFromDB(mainMap, customRoute)
  weatherHelper.getWeather()

  waypointButtonListeners()

}

var findRoute = function (value, map) {
  var url = 'http://localhost:3000/api/routes/' + value
  requestHelper.findRequest(url, function (foundRoute) {
      map.clearMarkers()
    for(var waypoint of foundRoute[0].waypoints){
      map.addWaypointMarker(waypoint.location);
    }
    routeView.renderRoute(foundRoute[0], directionsService, directionsDisplay)
  })
}

window.addEventListener('DOMContentLoaded', app)
