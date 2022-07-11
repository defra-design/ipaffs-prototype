var dsDatepickers = document.querySelectorAll('[data-module="ds-datepicker"]');

$(document).ready(function () {
  const options = {
    imagePath: '/public/images/icons/',
  }
  dsDatepickers.forEach(datePicker => new window.DS.components.DSDatePicker(datePicker, options).init());
})
