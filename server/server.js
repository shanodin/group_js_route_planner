var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var routesRouter = require('./controllers/routes_controller.js')
var waypointRouter = require("./controllers/waypoints_controller.js")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/../client/build'))

app.use('/api/waypoints', waypointRouter)

app.use('/api/routes', routesRouter)

app.listen(process.env.PORT, function () {
  console.log('App running on port 3000')
})
