$(function(){
  $('.main-menu').sticky();

  $('.scroll-link').on('click', function(e){
    var section = $(this).attr("href");
    $('html,body').animate({scrollTop: ($(section).offset().top - 180)}, 1000);
    e.preventDefault();
  });

  var sections = [];
  $('.main-menu a').each(function(e, index){
    sections.push($(this).attr("href"));
  });
  console.log(sections);

  $(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i=0; i < sections.length; i++) {
      var theID = sections[i];
      var divPos = $(theID).offset().top; // get the offset of the div from the top of page
      var divHeight = $(theID).height(); // get the height of the div in question
      if (windowPos + 180 >= divPos && windowPos + 180 < (divPos + divHeight)) {
        $("a[href='" + theID + "']").addClass("nav-active");
      } else {
        $("a[href='" + theID + "']").removeClass("nav-active");
      }
    }

    if(windowPos + windowHeight == docHeight) {
      if (!$("nav li:last-child a").hasClass("nav-active")) {
        var navActiveCurrent = $(".nav-active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
        $("nav li:last-child a").addClass("nav-active");
      }
    }
  });
});
