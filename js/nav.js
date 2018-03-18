(function($) {

  $('.submenu a').click(function(e) {
    $('.submenu').hide();
    e.stopPropagation();
  });

  $('html').click(function() {
    $('.nav-dropdown').hide();
  });

  $('#nav-toggle').click(function(e) {
    console.log(e.target);
    $(e.target).toggleClass('active');
    $('.submenu').toggle();
  });

})(jQuery);
