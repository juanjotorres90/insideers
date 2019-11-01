$(function () {


  $(".filters-button").click(function () {
    $(this).css({
      "color": "#fff",
      "background-color": "#0d8ac7"
    });
    $(".menu__lat-menu--closed").toggle("display");
  });
  $("span").click(function () {
    $(".menu__lat-menu--closed").hide();
  });

});