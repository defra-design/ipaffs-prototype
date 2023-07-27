$( document ).ready(function() {
  /* $('form').submit(function() {
    if ($.trim($("input[name=breakfasttype]").val()) === "" || $.trim($("input[name=breakfastitem]").val()) === "") {
      alert('you did not fill out one of the fields');
      return false;
    }
  }); */

  //go to check-answers page (hub) when 'Save and return to hub' button is clicked on any page
  $('#save-and-return-button').click(function (){
    $('form').attr('action','/IMPtoCHEDD/check-answers')
  })

  // when a page is openened from the review page, it will show the 'Save and review button' instead
  // of the usual three buttons, and it will link back to the review page
  if (document.referrer == "http://localhost:3000/IMPtoCHEDD/review") {
    $(".save-and-submit-buttons").html("<input class=\"govuk-button govuk-!-margin-right-1 govuk-!-margin-bottom-4\" id=\"save-and-review-button\" name=\"save-and-review-button\" type=\"submit\" value=\"Save and review\" data-module=\"govuk-button\">");
    $('form').attr('action','http://localhost:3000/IMPtoCHEDD/review')
  }

  // automatically checks the 'for internal market' option
  if(document.URL === 'http://localhost:3000/IMPtoCHEDD/reason-for-import') {
    $('#are-consignments-in-containers-no').prop('checked',true);
    $('#conditional-for-transfer-to-dpe').hide()
  }
// when 'for internal market' option is clicked the expandable drop-down is hidden and vice versa
  $('#are-consignments-in-containers-yes').click(function (){
    $('#conditional-for-transfer-to-dpe').show()
  })

  $('#are-consignments-in-containers-no').click(function (){
    $('#conditional-for-transfer-to-dpe').hide()
  })
});