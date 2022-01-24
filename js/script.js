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
  
  $(".drag_down, .click_a").click(function () {
    $('html, body').animate({
        scrollTop: $("#about_").offset().top -1
    }, 1000);
  });
  $(".click_").on("click", function(e){
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

  lazyLoad();

  
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

function disable_template_image_lazy_loading( $default, $tag_name, $context ) {
  if ( 'img' === $tag_name && 'wp_get_attachment_image' === $context ) {
      return false;
  }
  return $default;
}
add_filter(
  'wp_lazy_loading_enabled',
  'disable_template_image_lazy_loading',
  10,
  3
);

// $(document).ready(function () {
// });

function lazyLoad() {
  const images = document.querySelectorAll('.lazy-img');

  const optionsLazyLoad = {
  }

  const imageObserver = new IntersectionObserver(function (enteries) {
      enteries.forEach(function (entery) {
          if (!entery.isIntersecting) {
              return;
          } else {
              preloadImage(entery.target);
              imageObserver.unobserve(entery.target);
          }
      });

  }, optionsLazyLoad);

  images.forEach(function (image) {
      imageObserver.observe(image)
  });
}

function preloadImage(img) {
  img.src = img.getAttribute('data-src');
  img.onload = function () {
      img.parentElement.classList.remove('loading-img');
      img.parentElement.classList.add("loaded-img");
      img.parentElement.parentElement.classList.add("lazy-head-img");
  }
}