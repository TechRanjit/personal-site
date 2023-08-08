$(document).ready(function () {
  $('.nav-list i').click(function () {
      $('.dropedown').addClass('active');
      $('.nav-list i').css("visibility", "hidden");
  })
  $('.icon i').click(function () {
      $('.dropedown').removeClass('active');
      $('.nav-list i').css("visibility", "visible");
  })


})