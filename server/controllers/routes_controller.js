var routeQueryHelper = require('../db/routeQueryHelper')
var express = require('express')
var routesRouter = express.Router()

routesRouter.get('/', function (req, res) {
  routesQueryHelper.all(function (routes) {
    res.json(routes)
  })
})

routesRouter.post('/', function (req, res) {
  var route = req.body
  routesQueryHelper.save(route, function (updatedRoutes) {
    res.json(updatedRoutes)
  })
})

module.exports = routesRouter
