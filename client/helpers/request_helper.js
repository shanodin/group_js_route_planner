var requestHelper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parseO(jsonString)
      callback(data)
    })
    xhr.send()
  },

  postRequest: function (url, callback, payload) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    var jsonString = JSON.stringify(payload)
    xhr.send(jsonString)
  }
}

module.exports = requestHelper
