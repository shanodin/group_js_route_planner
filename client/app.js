var MapWrapper = require('./views/mapWrapper.js')

var app = function () {
  renderMap()
  
}

var renderMap = function () {
  var mapDiv = document.querySelector('div#main-map')
  var mainMap = new MapWrapper(mapDiv)
}

window.addEventListener("DOMContentLoaded", app);
