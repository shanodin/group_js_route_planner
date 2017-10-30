var dropdownMaker = {}

dropdownMaker.setUpDropDown = function (items, select) {
  while(select.firstChild){select.removeChild(select.firstChild)}
  var firstOption = document.createElement("option")
  firstOption.innerText = "Select a Route!"
  firstOption.disabled = true;
  firstOption.selected = true;
  select.appendChild(firstOption)
  items.forEach(function (item) {
    var option = document.createElement('option')
    option.innerText = item.name
    select.appendChild(option)
  })
  // select.addEventListener('change', function () {
  //   console.log(this.value)
  // })
}

module.exports = dropdownMaker
