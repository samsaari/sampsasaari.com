$(document).ready(function() {
  $('#mobile-menu').click(function(event) {
    $('.navbar').toggleClass('responsive');
    $('#nav').toggleClass('responsive');
    console.log("vaihtu??");
  });
});
