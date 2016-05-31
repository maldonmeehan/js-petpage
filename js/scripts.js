$(document).ready(function() {

  $("span.toggle-display").click(function() {
    $("body").toggleClass("reverse-color");
  });

  $("#cat").click(function() {
    $("#fatty-katty").slideToggle();
  });

  $("#paragraph-one").click(function() {
    $("#paragraph-one").toggleClass("paragraph-select");
  });

  $("#paragraph-two").click(function(){
    $("#paragraph-two").toggleClass("paragraph-select");
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
