$(function(){
  $('.main-menu').sticky();

  $('.scroll-link').on('click', function(e){
    console.log(e);
    var section = $(this).attr("href");
    $('html,body').animate({scrollTop: ($(section).offset().top - 50)}, 1000);
    e.preventDefault();
  });
});
