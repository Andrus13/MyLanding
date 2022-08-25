/*$(function () {
  $("div").slice(0, 4).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".card:hidden").slice(0, 4).slideDown();
      if ($(".card:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 1500);
  });
});*/

$(function () {
  $(".card").slice(0, 7).hide();
  $(".card").removeClass('d-flex');
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".card:hidden").slice(0, 3).slideDown();
    if ($(".card:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
    }
});
});