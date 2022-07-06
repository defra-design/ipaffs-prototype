/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
    window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function() {
    window.GOVUKFrontend.initAll();
    console.log(1234);
    const myTimeout = setTimeout(runDatePicker, 5000);

})

function runDatePicker() {
    const myelement = document.querySelector('#basic');

    const myDatePicker = new DSDatePicker(myelement);
}