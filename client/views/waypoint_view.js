var requestHelper = require('../helpers/request_helper.js')

var waypointViewer = {
  getWaypointsFromDB: function (map, customRoute) {
    var url = 'http://localhost:3000/api/waypoints'
    requestHelper.getRequest(url, function (waypoints) {

      waypoints.forEach(function (waypoint) {
        renderCheckBoxes(waypoint, map, customRoute)
      })
    })
  }
}

var renderCheckBoxes = function (item, map, customRoute) {
  var culturalUL = document.querySelector("#waypoint-list-cultural")
  var viewsUL = document.querySelector("#waypoint-list-views")
  var foodUL = document.querySelector("#waypoint-list-food")
  var li = document.createElement('li')
  var waypointLabel = document.createElement('label')
  waypointLabel.innerText = item.name
  li.appendChild(waypointLabel)
  var box = document.createElement('input')
  box.setAttribute('type', 'checkbox')
  box.setAttribute('id', 'checkbox')
  box.value = item.latLng
  box.addEventListener('change', function (event) {
    var waypoint = item.name
<<<<<<< HEAD
    if(this.checked){
    map.addWaypointMarker(item.name, item.type)
    customRoute.addWaypoint(waypoint)
  } else{
    map.clearMarker(item.name)
    var filteredArray = customRoute.waypoints.filter(function (waypoint) {
      return waypoint.location !== item.name
    })
    customRoute.waypoints = filteredArray
  }})
=======
    if (this.checked) {
      map.addWaypointMarker(item.name)
      customRoute.addWaypoint(waypoint)
    } else {
      map.clearMarker(item.name)
      var filteredArray = customRoute.waypoints.filter(function (waypoint) {
        return waypoint.location !== item.name
      })
      customRoute.waypoints = filteredArray
    }
  })
>>>>>>> develop
  waypointLabel.appendChild(box)

  switch (item.type) {
    case "Cultural":
      culturalUL.appendChild(li)
      break

    case "Views":
      viewsUL.appendChild(li)
      break

    case "Refreshment":
      foodUL.appendChild(li)
      break
  }
}

module.exports = waypointViewer
