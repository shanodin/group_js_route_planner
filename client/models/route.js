var Route = function (name, origin, destination) {
  this.name = name,
  this.origin = origin,
  this.destination = destination,
  this.waypoints = [],
  this.optimizeWaypoints = true
}

Route.prototype.addWaypoint = function (locationInfo) {
  var waypoint = {
    location: locationInfo,
    stopover: true
  }
  this.waypoints.push(waypoint)
}

module.exports = Route
