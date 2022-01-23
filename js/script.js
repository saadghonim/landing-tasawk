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
  
  $("#click_about_").click(function () {
    $('html, body').animate({
        scrollTop: $("#about_ ").offset().top -70
    }, 1000);
  });
  
  $("#click_Services_").click(function () {
    $('html, body').animate({
        scrollTop: $("#Services_").offset().top -0
    }, 1000);
  });
  
  $("#click_Works_").click(function () {
    $('html, body').animate({
        scrollTop: $("#Works").offset().top -0
    }, 1000);
  });
  $("#click_Contact_").click(function () {
    $('html, body').animate({
        scrollTop: $("#Contact_").offset().top -70
    }, 1000);
  });
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 20) {
        $('header').css({
            "background-color": "#ffffff",
            "padding": "10px 0",
            
          });
          $(".nav img").css("width", "45px")
          $("header").addClass("fixed");
    } else {
        $('header').css({
          "background-color":"unset",
        });
        $(".nav img").css("width", "57px")
        $("header").removeClass("fixed");
    }
  });
  if ($(window).width() <= 991) {
    $(window).on('scroll', function() {
      if($(window).scrollTop() > 20) {
        $("header").addClass("fixed");
} else {
          $("header").removeClass("fixed");  
      }
    });
  }
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