var styling = require("./map_styles.js")
var requestHelper = require("../helpers/request_helper.js")
var flickrHelper = require("../helpers/flickr_helper.js")


var MapWrapper = function (container) {
  this.markers = [],
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 55.949768, lng: -3.197314},
    zoom: 14,
    styles: styling
  })
  this.googleMap.setMapTypeId('roadmap')
}

MapWrapper.prototype.addMarker = function (object) {
  var marker = new google.maps.Marker({
    position: object.latLng,
    map: this.googleMap
  })
  var infoWindow = this.createInfoWindow(object)
    marker.addListener('click', function() {
    infoWindow.open(marker.map, marker);

  })
  this.markers.push(marker);
};



MapWrapper.prototype.addWaypointMarker = function (waypointName) {
    url = "http://localhost:3000/api/waypoints" + waypointName
    requestHelper.getRequest(url, function(waypoint) {
      var marker = new google.maps.Mark({
        position: waypoint.latLng,
        // icon: //function to get icon.
        map: this.googleMap
      })
      // var infoWindow = this.createInfoWindow(waypoint)
    }.bind(this))
}

MapWrapper.prototype.createInfoWindow = function (object) {
  var infoWindow = new google.maps.InfoWindow({
    content: "<b>" + object.name + "</b>"
  })


  return infoWindow
}



module.exports = MapWrapper
