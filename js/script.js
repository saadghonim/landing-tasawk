$(document).ready(function(){$(window).width()<=991&&($(".bars_").click(function(){$(".nav_mob").toggle("500"),$(".moboverlay").fadeIn("500"),$("body").addClass("over_"),$("header").css("transition","unset")}),$(".close_ , .moboverlay , .anc_nav").click(function(){$(".nav_mob").toggle("300"),$(".moboverlay").fadeOut("300"),$("body").removeClass("over_"),$("header").css("transition","unset")})),$("#click_logo ,.scroll_up ").click(function(){$("html, body").animate({scrollTop:$("#p_logo").offset().top-1},1e3)}),$(".drag_down, .click_a").click(function(){$("html, body").animate({scrollTop:$("#about_").offset().top-1},1e3)}),$(".click_").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:$("#"+$(this).data("id")).offset().top-0},1e3)}),$(window).on("scroll",function(){$(window).scrollTop()>20?$("header").addClass("fixed"):$("header").removeClass("fixed")}),$(window).width()<=1140&&$(".logo_div").unwrap()});var fixedBar=document.getElementById("header_"),prevScrollpos=window.pageYOffset;window.onscroll=function(){var o=window.pageYOffset;fixedBar.style.cssText=prevScrollpos>=o?"top: 0; transition: .3s;":"top: -130px; transition:.3s;",prevScrollpos=o},(new WOW).init(),document.documentElement.style.setProperty("--animate-duration",".8s");