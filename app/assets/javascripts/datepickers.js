var datepickers = document.querySelectorAll('[data-module="accessible-datepicker"]')

$(document).ready(function () {
  if (datepickers.length === 0) {
    return
  }

  var hiddenIcon = document.createElement('div')
  hiddenIcon.setAttribute('class', 'hidden-icon')
  hiddenIcon.innerHTML = '<svg viewBox="0 0 24 24" id="calendar" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M0 0h24v24H0z" fill="none"/>' +
    '<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>' +
    '</svg>'
  document.body.appendChild(hiddenIcon)

  // workaround for IE lack of support for forEach on the NodeList
  if (typeof NodeList.prototype.forEach !== 'function') {
    NodeList.prototype.forEach = Array.prototype.forEach
  }

  datepickers.forEach(function (element) {
    datepicker(
      element,
      {
        theme: 'defra-datepicker',
        icon: '#calendar',
        autoScroll: true
      },
      {
        onParseInputs: function (day, month, year) {
          var prefix
          if (year.length === 1) {
            prefix = '200'
          } else if (year.length === 2) {
            prefix = '20'
          } else {
            prefix = ''
          }
          return { day: day, month: month, year: prefix + year }
        }
      }
    )
  })
})
