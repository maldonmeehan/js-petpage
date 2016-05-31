$(document).ready(function() {

  $("h3.toggle-display").click(function() {
    $("body").removeClass();
    $("body").addClass("reverse-color");
    $("h3").toggle();
  });

  $("h3.toggle-display-off").click(function() {
    $("body").removeClass();
    $("body").addClass("normal-color");
    $("h3").toggle();
  });


  $("#cat").click(function() {
    $("#fatty-katty").slideToggle();
  });

  $("#goat").click(function() {
    $("#billy-goat").fadeToggle();
  });

  $("#dog").click(function() {
    $("#skinny-the-dog").slideToggle();
  });

  $("#pig").click(function() {
    $("#porky-the-pig").fadeToggle();
  });
});
