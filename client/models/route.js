var Route = function (name, origin, destination) {
  this.name = name,
  this.origin = origin,
  this.destination = destination,
  this.waypoints = []
}

Route.prototype.addWaypoint = function (location) {
  var waypoint = {
    location: location,
    stopover: true
  }
  this.waypoints.push(waypoint)
};


module.exports = Route;
