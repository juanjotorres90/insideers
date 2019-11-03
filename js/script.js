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




  var $grid = $('.container').isotope({
    itemSelector: '.card'
  });



var filters = {};

$('.filters').on( 'click', '.button', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


});
