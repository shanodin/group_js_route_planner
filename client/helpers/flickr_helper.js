var flickrHelper = {

  request: function (name) {
    var tag = this.tagMaker(name)
    console.log("tag", tag)
    var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=56a4f5d0179598fb68c82a2f0973331f&text=" + tag + "&format=json&nojsoncallback=1"
    console.log("url", url);
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.addEventListener('load', function () {
      var response = JSON.parse(this.responseText)
      var photo = response.photos.photo[5]
      console.log("response", response)
      var imageUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg"
      // getting the appropriate id as stored in mapwrapper
      // var idname = name.replace(" ", "")
      // get the infowindow by id search as it exists and populate inside information.
      var img = document.querySelector("#" + tag)
      console.log("flickr helper img html", img)
      console.log("imageUrl", imageUrl);
      img.src = imageUrl
      img.alt = "A photo of " + name
      img.className = "flickr-image"
    })
    request.send()
  },

  tagMaker: function (name) {
    // var step1 = name.replace(" ", "")
    var step1 = name.replace(/\s/g, '')
    var step2 = step1.replace("'", "")
    return step2.toLowerCase()
  }

}

module.exports = flickrHelper
