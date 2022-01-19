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

  $(window).on('scroll', function() {
    if($(window).scrollTop() > 20) {
        $('header').css({
            "background-color": "#ffffff",
            "padding": "10px 0",
            
          });
          $(".nav img").css("width", "45px")
          $(".anc_nav").hover(function(){
            $(this).css("color", "#7788b0");
            }, function(){
            $(this).css("color", "#1e2d51");
          });
          $(".anc_nav , .bars_ , .close_").css("color", "#1e2d51");
          $("header").addClass("fixed");
    } else {
        $('header').css({
          "background-color":"unset",
        });
        $(".nav img").css("width", "57px")

        $('.anc_nav').hover(function(){
          $(this).css("color", "#1e2d51")
      })
        $(".anc_nav").hover(function(){
          $(this).css("color", "#ffffff");
          }, function(){
            $(this).css("color", "#7788b0");
        });
        $(".anc_nav , .bars_ , .close_").css("color", "#7788b0");

        $("header").removeClass("fixed");
    }
  });
  if ($(window).width() <= 767) {
    $(window).on('scroll', function() {
      if($(window).scrollTop() > 20) {

// 
$(window).on('scroll', function() {
  if($(window).scrollTop() > 20) {
        $(".anc_nav").hover(function(){
          $(this).css("color", "#cb512f");
          }, function(){
          $(this).css("color", "#ffffff");
        });
        $(".anc_nav").css("color", "#ffffff");
        $(".bars_").css("color", "#1e2d51");

  } else {
      $('header').css({
        "background-color":"unset",
      });
      $(".bars_").css("color", "#1e2d51");
      $(".anc_nav").hover(function(){
        $(this).css("color", "#cb512f");
        }, function(){
          $(this).css("color", "#ffffff");
      });
      $(".bars_").css("color", "#ffffff");

  }
});
// 
            $(".bars_").css("color", "#ffffff");
            $(".anc_nav , .close_").css("color", "#1e2d51");
            $("header").addClass("fixed");
            
      } else {

          $(".anc_nav").hover(function(){
            $(this).css("color", "#ffffff");
            }, function(){
              $(this).css("color", "#7788b0");
          });
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
  if (prevScrollpos > currentScrollPos) {
    fixedBar.style.cssText = 
    'top: 0; transition: .5s;'
  } else {
    fixedBar.style.cssText = 
    'top: -130px; transition:.5s;'

  }
  prevScrollpos = currentScrollPos;
}

new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.8s');