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


  requestHelper.find = function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  }

  requestHelper.postRequest = function (url, callback, payload) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var jsonString = JSON.stringify(payload)
    xhr.send(jsonString)
  }


module.exports = requestHelper
