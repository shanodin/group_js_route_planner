var requestHelper = require('../helpers/request_helper.js')

var waypointViewer = {
  getWaypointsFromDB: function (map, customRoute) {
    var url = 'http://localhost:3000/api/waypoints'
    requestHelper.getRequest(url, function (waypoints) {
      var ul = document.querySelector("#waypoint-list")
      waypoints.forEach(function(waypoint){
        renderCheckBoxes(waypoint, ul, map, customRoute)
      })
    })
  }
}

var renderCheckBoxes = function (item, ul, map, customRoute) {
  var li = document.createElement('li')
  var waypointLabel = document.createElement('label')
  waypointLabel.innerText = item.name
  li.appendChild(waypointLabel)
  var box = document.createElement("input");
  box.setAttribute("type", "checkbox");
  box.value = item.latLng;
  box.addEventListener('change', function(event){
    var waypoint = item.name


    if(this.checked){
    map.addWaypointMarker(item.name)
    customRoute.addWaypoint(waypoint)
  } else{
    map.clearMarker(item.name)
    var filteredArray = customRoute.waypoints.filter(function (waypoint) {
      return waypoint.location !== item.name
    })
    customRoute.waypoints = filteredArray
  }})
  waypointLabel.appendChild(box)
  ul.appendChild(li)
}



module.exports = waypointViewer
