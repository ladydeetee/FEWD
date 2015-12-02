$(document).ready(function () {

  $("#form-signup").submit(function (event) {
    if (($("#input-name").val() === '') ||
        ($("#input-email").val() === '') ||
        ($("#input-phone").val() === '') ||
        ($("#input-password").val() === '')){
      $(".response").text("All fields are required.").show().fadeOut(3000);  
    }
    else 
      return;
    
    event.preventDefault();
  });
});