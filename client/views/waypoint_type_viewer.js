
var waypointButtonListeners = function () {
  var culturalButton = document.querySelector('#culturalButton')
  culturalButton.addEventListener('click', function () {
    var culturalDiv = document.querySelector('#cultural')
    var viewDiv = document.querySelector('#views')
    var foodDiv = document.querySelector('#food')
    culturalDiv.style.display = 'unset'
    viewDiv.style.display = 'none'
    foodDiv.style.display = 'none'
  })

  var viewButton = document.querySelector('#viewButton')
  viewsButton.addEventListener('click', function () {
    var culturalDiv = document.querySelector('#cultural')
    var viewDiv = document.querySelector('#views')
    var foodDiv = document.querySelector('#food')
    culturalDiv.style.display = 'none'
    viewDiv.style.display = 'unset'
    foodDiv.style.display = 'none'
  })

  var foodButton = document.querySelector('#foodButton')
  foodButton.addEventListener('click', function () {
    var culturalDiv = document.querySelector('#cultural')
    var viewDiv = document.querySelector('#views')
    var foodDiv = document.querySelector('#food')
    culturalDiv.style.display = 'none'
    viewDiv.style.display = 'none'
    foodDiv.style.display = 'unset'
  })

}

module.exports = waypointButtonListeners
