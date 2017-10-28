var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/../client/build'))
var routesRouter = require('./controllers/routes_controller.js')

app.use('/api/routes', routesRouter)

app.listen(3000, function () {
  console.log('App running on port 3000')
})
