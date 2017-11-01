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
  // this.addWaypointMarker = this.addWaypointMarker.bind(this)
}

MapWrapper.prototype.addMarker = function (object) {
  var marker = new google.maps.Marker({
    position: object.latLng,
    map: this.googleMap,
    icon: 'assets/Flag.png'
  })
  var infoWindow = this.createInfoWindow(object)
    marker.addListener('click', function() {
    infoWindow.open(marker.map, marker);

  })
  this.markers.push(marker);
  console.log(this.markers);
};


MapWrapper.prototype.addWaypointMarker = function (wayPoint) {
    url = "http://localhost:3000/api/waypoints/" + wayPoint.name
    requestHelper.getRequest(url, function(waypoint) {
      console.log("AddWaypointMarker:", waypoint);
      var marker = new google.maps.Marker({
        position: waypoint[0].latLng,
        map: this.googleMap,
        icon: 'assets/' + waypoint[0].type + '.png'

      })
      var infoWindow = this.createInfoWindow(waypoint[0])
      marker.addListener('click', function() {
        infoWindow.open(marker.map, marker);
      })
      this.markers.push(marker)
      console.log(marker.position.lat());
      console.log(this.markers);
    }.bind(this))
}

MapWrapper.prototype.createInfoWindow = function (object) {
  if(object.notes) {
    return this.enhancedWindow(object)
    } else {
    return this.standardWindow(object)
  }
}

MapWrapper.prototype.standardWindow = function (object) {
  var infoWindow = new google.maps.InfoWindow({
    content: "<b>" + object.name + "</b>"
  })
  return infoWindow
};

MapWrapper.prototype.enhancedWindow = function (object) {
  var infoWindow = new google.maps.InfoWindow({
  content: "<div><b>" + object.name + "</b><br>" + object.notes + "</div>"
  })
  return infoWindow
};

MapWrapper.prototype.clearMarker = function (waypointName) {
  url = "http://localhost:3000/api/waypoints/" + waypointName
  requestHelper.getRequest(url, function (waypoint) {
    var filteredArray = this.markers.filter(function (marker) {
      if(marker.position.lat() === waypoint[0].latLng.lat){
        marker.setMap(null)
      }
      return marker.position.lat() !== waypoint[0].latLng.lat
    })
    this.markers = filteredArray;
  }.bind(this))
};

MapWrapper.prototype.clearMarkers = function () {
    this.markers.forEach(function(marker){
      marker.setMap(null);
    })
    this.markers = []
};
// MapWrapper.prototype.iconSorter = function (object) {
//   flickrHelper.request(object.name)
//
// };

module.exports = MapWrapper
