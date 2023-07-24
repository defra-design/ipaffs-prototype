$( document ).ready(function() {
  /* $('form').submit(function() {
    if ($.trim($("input[name=breakfasttype]").val()) === "" || $.trim($("input[name=breakfastitem]").val()) === "") {
      alert('you did not fill out one of the fields');
      return false;
    }
  }); */

  if (document.referrer == "http://localhost:3000/breakfast/checkanswers") {
    $('form').attr('action','http://localhost:3000/breakfast/checkanswers')
  }

  $('input:radio[name=breakfasttype]').change(function(){
    var option = $(this).val();


    if (option == 'Standard'){
      $('form').attr('action', 'standard-options');
    }
    if (option == 'Vegetarian'){
      $('form').attr('action', 'veggie-options');
    }
    if (option == 'Vegan'){
      $('form').attr('action', 'vegan-options');
    }
  });

});
