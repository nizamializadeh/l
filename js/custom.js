$(function() {
"use strict";
 /*  =====  On responsive swatch left to right colunm  =====  */
function left_colunm_swetch () {
    if ($( window ).width() <= 767) {
        $('.navbar .collapse ').removeClass('resp_menu');
        $('.navbar').removeClass('in');
        localStorage.setItem('display', 'wrapper');
        $('#column-right:parent').each(function () {
        $(this).insertBefore($(this).prev('#column-left'));
        
        
        });     
    }
    if ($(window).width() > 767) {
        $('.navbar .collapse ').addClass('resp_menu');
        localStorage.setItem('display', 'wrapper');
        $('#column-left:parent').each(function () {
        $(this).insertBefore($(this).prev('#column-right'));
        
        });
    }
}
 /*  =====  magnificPopup  =====  */
 function m_popup_select () {
    $('#product-thumbnail').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  })
}
/* ===== Search  =====   */
function search(){
   var i = $("#search-overlay-btn");
   var a = $(".search-overlay, .search-overlay .search-overlay-close");
    i.on('click', function(event) {
        $(".search-overlay").addClass("open"),
        $('.search-overlay > form > input[type="search"]').focus();
    });
    a.on('click', function(event) {
        event.target != this && "search-overlay-close" != event.target.className && 32 != event.keyCode || $(this).removeClass("open");
    });
}
/* ===== Grid list active  =====   */
function gl_active(){
    $('.btn-list-grid button').on('click', function() {
        if($(this).hasClass('grid-view')) {
          $('.btn-list-grid button').addClass('active');
          $('.btn-list-grid button.list-view').removeClass('active');
        }
        else if($(this).hasClass('list-view')) {
        	$('.btn-list-grid button').addClass('active');
        	$('.btn-list-grid button.grid-view').removeClass('active');
        }
    });
}
/* ===== Grid list View  =====   */
function gl_view() {
    // Product List
    $('#list-view').on('click',function() {
        $('.product-layout > .clearfix').remove();
        $('.product-layout').attr('class', 'product-layout product-list col-xs-12');
        $('#column-left .product-layout').attr('class', 'product-layout mb_20');
        $('#column-right .product-layout').attr('class', 'product-layout mb_20');

    });
    // Product Grid
    $('#grid-view').on('click',function() {
        $('.product-layout').attr('class', 'product-layout product-grid col-md-4 col-xs-6');
    });
}
/* ===== Timer  =====   */
function makeTimer() {
    var endTime = new Date("August 10, 2018 12:00:00 PDT");         
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $(".days").html(days + "<span>Days</span>");
    $(".hours").html(hours + "<span>Hours</span>");
    $(".minutes").html(minutes + "<span>Min</span>");
    $(".seconds").html(seconds + "<span>Sec</span>");       
}
setInterval(function() { makeTimer(); }, 1000);
/* ===== Login Register Tab  =====   */
function log_reg_tab() {
    $('#login-form-link').on('click',function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').on('click',function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
}
/*  footer toggle */
function footerToggle(){
    if ($(window).width() < 991)
    {
        $(".footer .toggle_div").remove();
        $(".footer-title").append( "<a class='toggle_div'>&nbsp;</a>" );
        $(".footer-title").addClass('toggle');
        $(".footer-title").addClass('active');
        $(".footer .toggle_div").on('click',function(){
            $(this).parent().toggleClass('active').parent().find('ul').slideToggle('slow');
        });
    }else{
        $(".footer-title").parent().find('ul').removeAttr('style');
        $(".footer-title").removeClass('active');
        $(".footer-title").removeClass('toggle');
        $(".footer .toggle_div").remove();
    }   
}

function owl_carousel () {
    $('.main-banner').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        dots:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
            }
        }
    });

    $('.nArrivals , .Bestsellers , .Featured , .latest').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 3, //10 items above 1000px browser width
        responsive:{
            0:{
                items:2,
                nav:true
            },
            400:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            }
        }
    });

    $('#featu-pro , #new-pro').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:true
            },
            767:{
                items:2,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    });
    /* ===== Specials and client carousel =====   */
    $('.client').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
            }
        }
    });
    /* ===== left-special carousel =====   */
    $('#left-special , #bests-pro ').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 1, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:true
            },
            768:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
            }
        }
    });

    /* ===== Offers carousel =====   */
    $('.offers').owlCarousel({
        loop:true,
        autoplay:true,
        responsiveClass:true,
        items : 3, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1200:{
                items:2,
                nav:false
            },
            1360:{
                items:3,
                nav:false,
            }
        }
    });
    $('.related-pro').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 3, //10 items above 1000px browser width
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
            },
             1200:{
                items:3,
                nav:true,
            }
        }
    });

    /* ===== Product Thumbnail =====   */
    $('#product-thumbnail').owlCarousel({
        loop:false,
        thumbs: true,
        autoplay:false,
        items : 5, //10 items above 1000px browser width
        nav:true,
    })

    /* ===== Brand carousel =====   */
    $('.brand').owlCarousel({
        loop:true,
        autoplay:true,
        responsiveClass:true,
        items : 4, //10 items above 1000px browser width
        responsive:{
            0:{
                items:2,
                nav:true
            },
            400:{
                items:3,
                nav:true
            },
            600:{
                items:4,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
    /* ===== Blog carousel =====   */
    $('.blog').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 2, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
            }
        }
    })

    /* ===== Team carousel =====   */
    $('.team3col').owlCarousel({
        autoplay:false,
        responsiveClass:true,
        items : 3, //10 items above 1000px browser width
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    });
}
/* ---- Page Scrollup JS Start ---- */
   //When distance from top = 250px fade button in/out

     $(window).scroll(function(){
    if ($(this).scrollTop() > 250) {
        
        $('#scrollup').fadeIn(300);
        } 
    else {
        $('#scrollup').fadeOut(300);
        }
   }); 
        $('#scrollup').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });  

/* ===== Event for windows and document =====   */

    $(document).ready(function(){     
        gl_active();
        gl_view();
        search();
        footerToggle(); 
        m_popup_select ();
        log_reg_tab();

    });
   
    $( window ).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
        owl_carousel ();
        left_colunm_swetch ();      
    });
   
    $( window ).on("resize",function(){
        left_colunm_swetch ();
        gl_active();
        gl_view();
        search();
        footerToggle();
    });
});
jQuery( window ).on("load",function() {
     $(".loder").fadeOut("slow");    
});

/**
 * Star rating class
 * @constructor
 */
function StarRating() {
  this.init();
};

/**
 * Initialize
 */
StarRating.prototype.init = function() {
  this.stars = document.querySelectorAll('#rating span');
  for (var i = 0; i < this.stars.length; i++) {
    this.stars[i].setAttribute('data-count', i);
    this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
  }
  document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating element, effectively removing all hover states.
 */
StarRating.prototype.leaveStarListener = function() {
  this.fillStarsUpToElement(null);
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
 */
StarRating.prototype.fillStarsUpToElement = function(el) {
  // Remove all hover states:
  for (var i = 0; i < this.stars.length; i++) {
    if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      this.stars[i].classList.remove('hover');
    } else {
      this.stars[i].classList.add('hover');
    }
  }
};

// Run:
new StarRating();