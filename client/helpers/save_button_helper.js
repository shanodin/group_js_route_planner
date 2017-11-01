var requestHelper = require('./request_helper.js')
var routeView = require('../views/route_view.js')

// creating a custom route
var saveButton = function (customRoute) {
  var routeName = document.querySelector('#route-name')
  var originInput = document.querySelector('#origin-input')
  var destinationInput = document.querySelector('#destination-input')
  var saveButton = document.querySelector('#plan-route-btn')
  saveButton.addEventListener('click', function () {
    customRoute.name = routeName.value
    customRoute.origin = originInput.value
    customRoute.destination = destinationInput.value
    requestHelper.postRequest('http://localhost:3000/api/routes', customRoute)
    routeView.setUpRouteList()
    routeView.renderRoute(customRoute, directionsService, directionsDisplay)
  })
}

module.exports = saveButton
