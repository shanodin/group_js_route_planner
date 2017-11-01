var weatherHelper = {
  getWeather: function () {
    var url = 'https://api.darksky.net/forecast/41f1b128e2f99ef1453305d6efbd8034/55.9411885,-3.2753782'
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      var weatherDiv = document.querySelector('#weather')
      weatherDiv.innerHTML = data.currently.summary
    })
    xhr.send()
  }
}

module.exports = weatherHelper
