var datepickers = document.querySelectorAll('[data-module="accessible-datepicker"]');

$(document).ready(function () {
  datepickers.forEach(element => datepicker(element));
})
