var autocompleteHelper = {

  takeUserInput: function (mainMap, inputBox) {
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(55.928895, -3.228688),
      new google.maps.LatLng(55.995430, -3.133934));

    var options = {
      bounds: defaultBounds,
      strictBounds: true
    }
    var autocomplete = new google.maps.places.Autocomplete(inputBox, options)
    autocomplete.addListener('place_changed', function () {
      var result = autocomplete.getPlace().geometry.location
      var coords = {lat: result.lat(), lng: result.lng()}
      mainMap.addMarker(coords)
    })
  }

}

module.exports = autocompleteHelper
