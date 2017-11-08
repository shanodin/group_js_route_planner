var styling = require("./map_styles.js")
var requestHelper = require("../helpers/request_helper.js")
var flickrHelper = require("../helpers/flickr_helper.js")


var MapWrapper = function (container) {
  this.markers = [],
    this.googleMap = new google.maps.Map(container, {
      center: { lat: 55.949768, lng: -3.197314 },
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
  marker.addListener('click', function () {
    infoWindow.open(marker.map, marker);
    flickrHelper.request(object.name)
  })
  this.markers.push(marker);
  console.log(this.markers);
};


MapWrapper.prototype.addWaypointMarker = function (waypoint) {
  url = "https://murmuring-sea-67290.herokuapp.com/api/waypoints/" + waypoint.name
  requestHelper.getRequest(url, function (waypoint) {
    var marker = new google.maps.Marker({
      position: waypoint[0].latLng,
      map: this.googleMap,
      icon: 'assets/' + waypoint[0].type + '.png'
    })
    var infoWindow = this.createInfoWindow(waypoint[0])
    marker.addListener('click', function () {
      infoWindow.open(marker.map, marker);
      flickrHelper.request(waypoint[0].name)
    })
    this.markers.push(marker)
  }.bind(this))
}

MapWrapper.prototype.createInfoWindow = function (object) {
  if (object.notes) {
    return this.enhancedWindow(object)
  } else {
    return this.standardWindow(object)
  }
}

MapWrapper.prototype.standardWindow = function (object) {
  var idname = flickrHelper.tagMaker(object.name)
  //idnames are produced from those objects, same process is repeated in flickrHelper
  var infoWindow = new google.maps.InfoWindow({
    content: "<div><b>" + object.name + "</b><img id=" + idname + " src=''/></div></div>"
  })
  return infoWindow
};

MapWrapper.prototype.enhancedWindow = function (object) {
  var idname = flickrHelper.tagMaker(object.name)
  console.log(idname)
  var infoWindow = new google.maps.InfoWindow({
    maxWidth: 300,
    content: "<div><b>" + object.name + "</b></div><div><img id=" + idname + " src=''/></div><div>" + object.notes + "</div>"
  })
  return infoWindow
};

MapWrapper.prototype.clearMarker = function (waypointName) {
  url = "https://murmuring-sea-67290.herokuapp.com/api/waypoints/" + waypointName
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
