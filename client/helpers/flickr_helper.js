// requestFlickr('edinburghnationalgallery')

var flickrHelper = {

  request: function (name) {
    var tag = this.tagMaker(name);

    var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=56a4f5d0179598fb68c82a2f0973331f&text=" + tag + "&format=json&nojsoncallback=1"
    var request = new XMLHttpRequest()
    console.log("request url", url);
    request.open("GET", url)

    request.addEventListener( "load", function () {
      var response = JSON.parse(this.responseText)
      var photo = response.photos.photo[0]
      var imageUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
      var photoDiv = document.querySelector('div#flickr-photo')
      var flickrImage = document.createElement("IMG")
      flickrImage.setAttribute('src', imageUrl)
      photoDiv.appendChild(flickrImage)
      console.log(imageUrl)
    })
    request.send()
  },

  tagMaker: function (name) {
    var step1 = name.replace(" ", "")
    var step2 = step1.replace("'", "")
    return step2.toLowerCase();
  }

}



module.exports = flickrHelper;
