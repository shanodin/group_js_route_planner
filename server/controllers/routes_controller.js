
var routesQueryHelper = require('../db/routesQueryHelper')


var express = require('express')
var routesRouter = express.Router()

// var routesQueryHelper = new routesQueryHelper('mongodb://localhost:27017/route_planner', 'routes')

routesRouter.get('/', function (req, res) {
  routesQueryHelper.all(function (routes) {
    res.json(routes)
  })
})

routesRouter.get('/:id', function (req, res) {
  routesQueryHelper.find(req.params.id, function (route) {
    res.json(route)
  })
})

routesRouter.post('/', function (req, res) {
  var route = req.body
  routesQueryHelper.save(route, function (updatedRoutes) {
    res.json(updatedRoutes)
  })
})

module.exports = routesRouter
