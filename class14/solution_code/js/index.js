/*
1 - Initialize array
2 - Update the <select> elements with array values
3 - Capture user event when they choose a city
4 - Update the background image based on selection
*/

$(document).ready(function () {

  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
  var option = '';
  for (var i = 0; i < cities.length; i++) {
    option += '<option value="' + cities[i] + '">' + cities[i] + '</option>';
  }
  $('#city-type').append(option);

  $('#city-type').change(function() {
    var userInput = $('#city-type').val();
    $('body').removeAttr("class");
    $('body').addClass(userInput.toLowerCase());
  });

});