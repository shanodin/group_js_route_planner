var express = require("express");
var app = express();
var routesRouter = require("./controllers/routes_controller.js")

app.use(express.static(__dirname + "/../client/build"))


app.listen(3000, function(){
  console.log("App running on port 3000");
})
