$(function () {

  $('.btn-trigger').click(function(){

    $('.bar, .header-nav, .header-logo a, .fv, .fv-wrap').toggleClass('open');
    $('body').toggleClass('noscroll');
  })

  var $height = $('.fv').outerHeight();

  $(window).scroll(function(){
    if($(window).scrollTop() > $height){
      $('.header-container').addClass('large');
    } else {
      $('.header-container').removeClass('large');
    }

  })

});