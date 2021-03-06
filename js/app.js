$(function(){
  // $('.main-menu').sticky();

  $('.scroll-link').on('click', function(e){
    var section = $(this).attr("href");
    $('html,body').animate({scrollTop: ($(section).offset().top - 40)}, 1000);
    e.preventDefault();
  });

  $('.scroll-link-home').on('click', function(e){
    var section = $(this).attr("href");
    $('html,body').animate({scrollTop: ($(section).offset().top - 180)}, 1000);
    e.preventDefault();
  });

  var sections = [];
  $('.main-menu a').each(function(e, index){
    sections.push($(this).attr("href"));
  });

  $(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i=0; i < sections.length; i++) {
      var theID = sections[i];
      var divPos = $(theID).offset().top; // get the offset of the div from the top of page
      var divHeight = $(theID).height(); // get the height of the div in question
      if (windowPos + 180 >= divPos && windowPos + 200 < (divPos + divHeight)) {
        $("a[href='" + theID + "']").parent().addClass("nav-active");
      } else {
        $("a[href='" + theID + "']").parent().removeClass("nav-active");
      }
    }

    if(windowPos + windowHeight == docHeight) {
      if (!$("nav li:last-child").hasClass("nav-active")) {
        var navActiveCurrent = $(".nav-active a").attr("href");
        $("a[href='" + navActiveCurrent + "']").parent().removeClass("nav-active");
        $("nav li:last-child").addClass("nav-active");
      }
    }
  });
});
