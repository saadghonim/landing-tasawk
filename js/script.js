$(document).ready(function(){
  // header
  if ($(window).width() <= 991) {
    $(".bars_").click(function(){
      $(".nav_mob").toggle("500");
      $(".moboverlay").fadeIn("500");
      $("body").addClass("over_");
    });
    $(".close_ , .moboverlay , .anc_nav").click(function(){
      $(".nav_mob").toggle("500");
      $(".moboverlay").fadeOut("500");
      $("body").removeClass("over_");
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

  jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 20) {
        jQuery('header').css({
            "background-color": "#1e2d51",
            "padding-bottom": "15px"
          });
    } else {
      jQuery('header').css({
        "background-color":"unset",
      });
  
    }
  });
  // about us
  if ($(window).width() <= 1140){
    $(".about_us_logos").addClass("owl-carousel");
    $(".logo_div").unwrap();
    $(".logo_div").addClass("item");
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:4
          },
          1000:{
              items:5
          }
      }
  })
  }

});

var fixedBar = document.getElementById("header_");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    fixedBar.style.cssText = 
    'top: 0; transition: .5s;'
  } else {
    fixedBar.style.cssText = 
    'top: -130px; transition:.5s;'

  }
  prevScrollpos = currentScrollPos;
}

