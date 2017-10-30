var autocompleteHelper = {

  takeUserInput: function (mainMap, inputBox) {
    var autocomplete = new google.maps.places.Autocomplete(inputBox)
    autocomplete.addListener('place_changed', function () {
      var result = autocomplete.getPlace().geometry.location
      mainMap.addMarker(result)
    })
  }

}

module.exports = autocompleteHelper
