var requestHelper = {}


  requestHelper.getRequest = function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  }


  requestHelper.findRequest = function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  }

  requestHelper.postRequest = function (url, payload) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var jsonString = JSON.stringify(payload)
    xhr.send(jsonString)
  }


module.exports = requestHelper
