$(document).ready(function(){
  // header
  if ($(window).width() <= 991) {
    $(".bars_").click(function(){
      $(".nav_mob").toggle("500");
      $(".moboverlay").fadeIn("500");
      $("body").addClass("over_");
      $("header").css("transition", "unset")
    });
    $(".close_ , .moboverlay , .anc_nav").click(function(){
      $(".nav_mob").toggle("300");
      $(".moboverlay").fadeOut("300");
      $("body").removeClass("over_");
      $("header").css("transition", "unset")

    });
  }
  $("#click_logo ,.scroll_up ").click(function () {
    $('html, body').animate({
        scrollTop: $("#p_logo").offset().top -1
    }, 1000);
  });
  
  $(".drag_down").click(function () {
    $('html, body').animate({
        scrollTop: $("#about_").offset().top -1
    }, 1000);
  });
  $(".anc_nav").on("click", function(e){
    e.preventDefault();
  
    $('html, body').animate({
            scrollTop: $("#"+$(this).data("id")).offset().top -0
        }, 1000);
    
  })
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 20) {
          $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    };
  });

  //about us
  if ($(window).width() <= 1140){
    $(".logo_div").unwrap();
  }
});

var fixedBar = document.getElementById("header_");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    fixedBar.style.cssText = 
    'top: 0; transition: .3s;'
  } else {
    fixedBar.style.cssText = 
    'top: -130px; transition:.3s;'

  }
  prevScrollpos = currentScrollPos;
}

new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.8s');