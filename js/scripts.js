$(document).ready(function() {
   var height = parseInt(prompt("How tall are you? Please enter your height in inches"));

    if ( height >= 180 ) {
    $(".rides").addClass("green-background");

  } else if (height <= 179 && height >= 160 ) {
      $("#disko").addClass("green-background");
      $("#carousel").addClass("green-background");

  } else if (height <= 159 && height >= 120) {
    $("#carousel").addClass("green-background");

  } else if (height < 120) {
    $('#sorry').show();
  }

});
