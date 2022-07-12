var dsDatepickers = document.querySelectorAll('[data-module="ds-datepicker"]');
var dsDatepicker3FieldsContainers = document.querySelectorAll('.ds-datepicker-3-fields-container');

$(document).ready(function () {
  const options = {
    imagePath: '/public/images/icons/',
  }
  initDsDatePickers(options);
  initSynchronizationFor3FieldsDsDatePickers(options);
})

function initDsDatePickers(options) {
  dsDatepickers.forEach(datePicker => {
    new window.DS.components.DSDatePicker(datePicker, options).init();
  });
}

function initSynchronizationFor3FieldsDsDatePickers(options) {
  dsDatepicker3FieldsContainers.forEach(datePickerContainer => {
    set3FieldsSynchronization(datePickerContainer);
  });
}

function set3FieldsSynchronization(datePickerContainer) {
  var day = datePickerContainer.querySelector('[name="start-date-day"]');
  var month = datePickerContainer.querySelector('[name="start-date-month"]');
  var year = datePickerContainer.querySelector('[name="start-date-year"]');
  var dateInput = datePickerContainer.querySelector('[name="date-in-1-field"]');

  [day, month, year].forEach(element => {
    element.addEventListener('input', () => {
      dateInput.value = getDateFrom3Fields(day, month, year);
    });
  });

  dateInput.addEventListener('change', () => {
    var dateAsList = dateInput.value.split('/');
    day.value = dateAsList[0];
    month.value = dateAsList[1];
    year.value = dateAsList[2];
  })
}

function getDateFrom3Fields(day, month, year) {
  var today = new Date();
  var y = year.value || today.getFullYear();
  var m = month.value ? month.value : today.getMonth();
  var d = day.value || today.getDate();
  return `${d}/${m}/${y}`
}
