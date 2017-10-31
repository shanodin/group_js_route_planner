var mapStyling = require("./map_styles.js")

var MapWrapper = function (container) {
  this.markers = [],
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 55.949768, lng: -3.197314},
    zoom: 14,
    styles: mapStyling
  })
  this.googleMap.setMapTypeId('roadmap')
}

MapWrapper.prototype.addMarker = function (coords) {
  // console.log(coords);
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  var infoWindow = this.createInfoWindow(coords)
    marker.addListener('click', function() {
    infoWindow.open(marker.map, marker);

  })
  this.markers.push(marker);
};

MapWrapper.prototype.createInfoWindow = function (coords) {
  var infoWindow = new google.maps.InfoWindow({
    content: "Latitude: " + coords.lat + " Longitude: " + coords.lng
    })
  return infoWindow
}

module.exports = MapWrapper

// url = "http://localhost:3000/api/waypoints/" + nameValue
// requestHelper.getRequest(url, parsingMarkerfunction)
// parsingMarkerfunction(returned waypoint data)
// parse information
// flickrhelper request to get a photo
// addMarker waypoint
// find the right icon based on type
// set the flickr image into infowindow
// set notes into infowindow
// attach all to the map.
//
// off click will access that marker and set map to null.
//
//
//
//
// on click sets the waypoint option to true
// hit api for all details of the waypoint
// feed that all into add marker function
// create marker, populate info window
// add to markers array
//
//
// click that sets waypoint to false
// go into the array of markers, and set its map to null.
// preferably remove from array
