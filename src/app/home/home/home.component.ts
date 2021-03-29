import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import * as AOS from 'aos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {

    (function($) {
      "use strict";
      AOS.init();

    "use strict";
    /*************************
     scroll down start
     *************************/
    $(function() {
        $('.down').click (function() {
            $('html, body').animate({scrollTop: $('.booking').offset().top }, 'slow');
            return false;
        });
    });

    /*************************
     scroll down end
     *************************/
    /*************************
     loader js start
     *************************/

    $('.loader-wrapper').fadeOut('slow', function () {
        $(this).remove();
    });

    /*************************
     loader js end
     *************************/
    /*************************
     add class on scroll js start
     *************************/
    if ($(window).width() <= 991) {
        $('.menu-container').find('.inner-collapse').addClass("collapse");
        $(".dropdown-sec").on('click', function () {
            $('.navbar-nav').find('.dropdown-content').removeClass("demo");
            $(this).find('.dropdown-content').addClass("demo");
        });

        $(".menu-container").on('click', function () {
            $('.menu-container').find('.inner-collapse').removeClass("demo2");
            $(this).find('.inner-collapse').removeClass("collapse");
            $(this).find('.inner-collapse').addClass("demo2");
        });

        //demo2
    }

    /*************************
     add class on scroll js end
     *************************/


    /*************************
     tap to top js start
     *************************/

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
    $('.tap-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*************************
     tap to top js end
     *************************/


    /*************************
     scroll js start
     *************************/
    if ($(window).width() >= 991) {
        $("nav a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 45
                }, 1000, function () {
                });
                return false;
            }
        });
    } else {
        $("nav a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 50
                }, 1000, function () {
                });
                return false;
            }
        });
    }

    /*************************
     scroll js end
     *************************/

    /*************************
     Footer title Start
     *************************/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '768') {
        jQuery('.footer-title h3').append('<span class="according-menu"></span>');
        jQuery('.footer-title').on('click', function () {
            jQuery('.footer-title').removeClass('active');
            jQuery('.footer-contant').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.footer-contant').hide();
    } else {
        jQuery('.footer-contant').show();
    }

    /*************************
     Footer title End
     *************************/

    $('.filter-btn').on('click', function (e) {
        $('.collection-filter').css("left", "-15px");
    });
    $('.filter-back').on('click', function (e) {
        $('.collection-filter').css("left", "-365px");
        $('.sidebar-popup').trigger('click');
    });


    /*=====================
   16 .category page
   ==========================*/
    $('.collapse-block-title').on('click', function(e) {
        e.preventDefault;
        var speed = 300;
        var thisItem = $(this).parent(),
            nextLevel = $(this).next('.collection-collapse-block-content');
        if (thisItem.hasClass('open')){
            thisItem.removeClass('open');
            nextLevel.slideUp(speed);
        }
        else {
            thisItem.addClass('open');
            nextLevel.slideDown(speed);
        }
    });
    $('.color-selector ul li').on('click', function(e) {
        $(".color-selector ul li").removeClass("active");
        $(this).addClass("active");
    });
//list layout view
    $('.list-layout-view').on('click', function(e) {
        // $('.collection-grid-view').css('opacity', '0');
        $(".product-wrapper-grid").css("opacity","0.2");
        $('.shop-cart-ajax-loader').css("display","block");
        $('.product-wrapper-grid').addClass("list-view");
        $(".product-wrapper-grid").children().children().removeClass();
        $(".product-wrapper-grid").children().children().addClass("col-lg-12 col-grid-box ");
        setTimeout(function(){
            $(".product-wrapper-grid").css("opacity","1");
            $('.shop-cart-ajax-loader').css("display","none");
        }, 500);
    });
//grid layout view
    $('.grid-layout-view').on('click', function(e) {
        $('.collection-grid-view').css('opacity', '1');
        $('.product-wrapper-grid').removeClass("list-view");
        $(".product-wrapper-grid").children().children().removeClass();
        $(".product-wrapper-grid").children().children().addClass("col-lg-3 col-grid-box");

    });
    $('.product-2-layout-view').on('click', function(e) {
        if($('.product-wrapper-grid').hasClass("list-view")) {}
        else{
            $(".product-wrapper-grid").children().children().removeClass();
            $(".product-wrapper-grid").children().children().addClass("col-lg-6 col-grid-box ");
        }
    });
    $('.product-3-layout-view').on('click', function(e) {
        if($('.product-wrapper-grid').hasClass("list-view")) {}
        else{
            $(".product-wrapper-grid").children().children().removeClass();
            $(".product-wrapper-grid").children().children().addClass("col-lg-4 col-grid-box");
        }
    });
    $('.product-4-layout-view').on('click', function(e) {
        if($('.product-wrapper-grid').hasClass("list-view")) {}
        else{
            $(".product-wrapper-grid").children().children().removeClass();
            $(".product-wrapper-grid").children().children().addClass("col-lg-3 col-grid-box");
        }
    });
    $('.product-6-layout-view').on('click', function(e) {
        if($('.product-wrapper-grid').hasClass("list-view")) {}
        else{
            $(".product-wrapper-grid").children().children().removeClass();
            $(".product-wrapper-grid").children().children().addClass("col-lg-2 col-grid-box");
        }
    });

 


  /*************************
   testimonial js start
   *************************/

  $('#testimonial-slider').owlCarousel({
      items: 3,
      margin: 65,
      nav: true,
      dots: false,
      navText: ['<img src="/assets/theme/images/agency/testimonial/left.png">', '<img src="/assets/theme/images/agency/testimonial/right.png">'],
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          575: {
              items:2,
              margin: 10
          },
          991: {
              items: 2,
              margin: 30
          },
          1199: {
              items: 3,
              margin: 30
          }
      }
  });

  /*************************
   testimonial js end
   *************************/

  /*************************
   blog js start
   *************************/

  $('#blog-slider').owlCarousel({
      items: 3,
      margin: 30,
      nav: false,
      dots: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          576: {
              items: 2,
              margin: 10
          },
          991: {
              items: 2,
              margin: 10
          },
          992: {
              items: 3,
              margin: 10
          },
          1600: {
              items: 3
          }
      }
  });

  /*************************
   blog js end
   *************************/
  /*************************
   pricing js start
   *************************/

  $('.pricing-slider').owlCarousel({
      items: 3,
      margin: 30,
      nav: false,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      dots: false,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          576: {
              items: 2,
              margin: 10
          },
          991: {
              items:2,
              margin: 15
          },
          992: {
              items:3,
              margin: 15
          },
          1000: {
              items: 3
          }
      }
  });

  /*************************
   pricing js end
   *************************/
  /*************************
   speaker-slider js start
   *************************/

  $('.speaker-slider').owlCarousel({
      items: 3,
      margin: 55,
      nav: false,
      dots: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          360: {
              items: 2,
              margin: 10
          },
          480: {
              items: 3,
              margin: 10
          },
          767: {
              items: 2,
              margin: 10
          },
          991: {
              items: 3,
              margin: 10
          }
      }
  });

  /*************************
   speaker-slider js end
   *************************/
   /*************************
   testimonial js start
   *************************/

  $('#testimonial-slider').owlCarousel({
      items: 3,
      margin: 65,
      nav: true,
      dots: false,
      navText: ['<img src="/assets/theme/images/agency/testimonial/left.png">', '<img src="/assets/theme/images/agency/testimonial/right.png">'],
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          575: {
              items: 2,
              margin: 10
          },
          991: {
              margin: 30
          },
          1199: {
              items: 3,
              margin: 30
          }
      }
  });

  /*************************
   testimonial js end
   *************************/

  /*************************
   blog js start
   *************************/

  $('#blog-slider').owlCarousel({
      items: 3,
      margin: 55,
      nav: false,
      dots: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          576: {
              items: 2,
              margin: 10
          },
          991: {
              items: 3,
              margin: 10
          },
          1600: {
              items: 3
          }
      }
  });

  /*************************
   blog js end
   *************************/
  /*************************
   pricing js start
   *************************/

  $('.pricing-slider').owlCarousel({
      items: 3,
      margin: 30,
      nav: false,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      dots: false,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          576: {
              items: 2,
              margin: 10
          },
          992: {
              margin: 15
          },
          1000: {
              items: 3
          }
      }
  });

  /*************************
   pricing js end
   *************************/
  /*************************
   speaker-slider js start
   *************************/

  $('.speaker-slider').owlCarousel({
      items: 3,
      margin: 55,
      nav: false,
      dots: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          360: {
              items: 2,
              margin: 10
          },
          480: {
              items: 3,
              margin: 10
          },
          767: {
              items: 2,
              margin: 10
          },
          991: {
              items: 3,
              margin: 10
          }
      }
  });

  /*************************
   speaker-slider js end
   *************************/

})(jQuery);


  }

}

