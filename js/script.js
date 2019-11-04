$(function () {


  $(".filters-button").click(function () {
    $(this).toggleClass("header__button--checked");
    $(".menu__lat-menu--closed").slideToggle(800, 'swing');
  });
  $("span").click(function () {
    $(".menu__lat-menu--closed").hide();
    $(".filters-button").removeClass("header__button--checked")
  });

  $(".card__button").click(function () {
    $(this).toggleClass("header__button--checked");
  });

  var buttonFilters = {};
  var buttonFilter;

  var qsRegex;


  var $grid = $('.container').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows',
    filter: function () {
      var $this = $(this);
      var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
      var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
      return searchResult && buttonResult;
    }
  });


  $('.filters').on('click', '.button', function () {
    var $this = $(this);

    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');

    buttonFilters[filterGroup] = $this.attr('data-filter');

    buttonFilter = concatValues(buttonFilters);

    $grid.isotope();
  });

  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.button', function (event) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $(event.currentTarget);
      $button.addClass('is-checked');
    });
  });


  function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }



  var $quicksearch = $('.quicksearch').keyup(debounce(function () {
    qsRegex = new RegExp($quicksearch.val(), 'gi');
    $grid.isotope();
  }, 200));
  var $quicksearchMobile = $('.quicksearch-mobile').keyup(debounce(function () {
    qsRegex = new RegExp($quicksearchMobile.val(), 'gi');
    $grid.isotope();
  }, 200));


  function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;

      function delayed() {
        fn.apply(_this, args);
      }
      timeout = setTimeout(delayed, threshold);
    };
  }


});