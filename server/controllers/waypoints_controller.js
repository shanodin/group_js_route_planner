
var QueryHelper = require('../db/query_helper.js')


var express = require('express')
var waypointRouter = express.Router()

var waypointQueryHelper = new QueryHelper('waypoints')


waypointRouter.get("/", function (req, res) {
  waypointQueryHelper.all(function (waypoints) {
    res.json(waypoints)
  })
})

waypointRouter.get('/:id', function (req, res) {
  waypointQueryHelper.find(req.params.id, function (waypoint) {
    res.json(waypoint)
  })
})

waypointRouter.post('/', function (req, res) {
  var waypoint = req.body
  waypointQueryHelper.save(waypoint, function (updatedWaypoints) {
    res.json(updatedWaypoints)
  })
})


module.exports = waypointRouter;
