var requestHelper = require('../helpers/request_helper.js')
var dropdownMaker = require('./dropdownMaker.js')

var routeView = {

  setUpRouteList: function () {
    var url = 'https://murmuring-sea-67290.herokuapp.com/api/routes'
    var routeSelect = document.querySelector('#route-select')
    requestHelper.getRequest(url, function (routes) {
      dropdownMaker.setUpDropDown(routes, routeSelect)
    })
  },

  renderRoute: function (route, finder, displayer) {
    // console.log('requesting route')
    finder.route({
      origin:  route.origin,
      destination: route.destination,
      travelMode: google.maps.TravelMode.WALKING,
      waypoints: route.waypoints
    }, function (response, status) {
      displayer.setDirections(response)
      // console.log('rendering to screen', response);
    })
  }

}


module.exports = routeView;
