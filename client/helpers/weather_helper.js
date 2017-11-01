var weatherHelper = {
  getWeather: function () {
    var url = 'https://api.darksky.net/forecast/41f1b128e2f99ef1453305d6efbd8034/55.9411885,-3.2753782'
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      var weatherDiv = document.querySelector('#weather-text')
      weatherDiv.innerText = data.currently.summary
      var icon = data.currently.icon
      setSkycon(icon)
    })
    xhr.send()
  }
}

// var addSkycon = function (iconToUse) {
//   var skycons = new Skycons({'color': 'black'})

  // skycons.add('icon1', Skycons.PARTLY_CLOUDY_DAY)
  // skycons.add('icon2', Skycons.CLEAR_DAY)
  // skycons.add('icon3', Skycons.CLEAR_NIGHT)
  // skycons.add('icon4', Skycons.PARTLY_CLOUDY_NIGHT)
  // skycons.add('icon5', Skycons.CLOUDY)
  // skycons.add('icon5', Skycons.RAIN)
  // skycons.add('icon5', Skycons.SLEET)
  // skycons.add('icon5', Skycons.SNOW)
  // skycons.add('icon5', Skycons.WIND)
  // skycons.add('icon5', Skycons.FOG)
//   }
// }

var setSkycon = function (weatherType) {
  var skycons = new Skycons({ 'color': 'black' })
  console.log(Skycons.CLEAR_DAY)

  var skycon = null
  switch (weatherType) {
    case 'clear-day':
      skycon = Skycons.CLEAR_DAY
      break
    case 'clear-night':
      skycon = Skycons.CLEAR_NIGHT
      break
    case 'rain':
      skycon = Skycons.RAIN
      break
    case 'snow':
      skycon = Skycons.SNOW
      break
    case 'sleet':
      skycon = Skycons.SLEET
      break
    case 'wind':
      skycon = Skycons.WIND
      break
    case 'fog':
      skycon = Skycons.FOG
      break
    case 'cloudy':
      skycon = Skycons.CLOUDY
      break
    case 'partly-cloudy-day':
      skycon = Skycons.PARTLY_CLOUDY_DAY
      break
    case 'partly-cloudy-night':
      skycon = Skycons.PARTLY_CLOUDY_NIGHT
      break
  }
  var iconDiv = document.querySelector('#weather-canvas')
  console.log(iconDiv)
  skycons.set(iconDiv, skycon)
  skycons.play()
}

module.exports = weatherHelper
