/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


  $('input:radio[name=regulationConformQ]').change(function () {
    var optionSelected = $(this).val();
    if (optionSelected == "yes") {
        //alert('Works yes');
        $("#purpose").removeClass("hidden-reason");
        $("#purpose-nc").addClass("hidden-reason");
        $("#conform-hint").addClass("hidden-reason");
    }

    if (optionSelected == "no") {
        //alert('Works no');
        $("#purpose-nc").removeClass("hidden-reason");
        $("#purpose").addClass("hidden-reason");
        $("#conform-hint").addClass("hidden-reason");
    }
});
   
});
