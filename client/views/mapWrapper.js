var MapWrapper = function (container) {
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 55.949768, lng: -3.197314},
    zoom: 15
  })
  this.googleMap.setMapTypeId('hybrid')
}

module.exports = MapWrapper
