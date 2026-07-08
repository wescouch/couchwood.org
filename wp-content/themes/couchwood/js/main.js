jQuery(function( $ ){

  // Mobile Navigation
	$("header .genesis-nav-menu, .nav-primary .genesis-nav-menu").addClass("responsive-menu");
	$("header .genesis-nav-menu, .nav-primary .genesis-nav-menu").removeClass("js-superfish sf-js-enabled sf-arrows");
	$(".nav-primary").prepend('<div class="menu-toggle"><div class="menu-burger"><span></span><span></span><span></span></div>');
	$(".menu-item-has-children").prepend('<div class="sub-menu-toggle"><span></span><span></span></div>');

	$(".menu-toggle").click(function(){
		$("body").toggleClass("navOpen");
	});

	$(window).resize(function(){
		if(window.innerWidth > 1030) {
			$("nav.nav-primary > .wrap, .nav-primary .genesis-nav-menu, nav .sub-menu").removeAttr("style");
			$(".responsive-menu > .menu-item").removeClass("menu-open");
			$("body").removeClass("navOpen");
		}
	});

	$(".genesis-nav-menu a").click(function(){
		$("body").removeClass("navOpen");
	});

	$(document).keyup(function(e) {
	    if (e.keyCode == 27) {
	        $('body').removeClass('navOpen');
	    }
	});

	$(".sub-menu-toggle").click(function(){
		$(this).parent().toggleClass("menu-open");
		$(this).closest('.menu-item').find(".sub-menu").slideToggle();
	});

});


//
//
//
// End Mobile Nav
//
//
//



  // Accessibility-ready responsive menu.
	( function ( document, $, undefined ) {
	$( 'body' ).addClass( 'js' );


  // Modify skip links to match mobile buttons
	function _changeSkipLink( buttons ) {
		var startLink = 'genesis-nav',
			endLink   = 'mobile-genesis-nav';
		if ( 'none' === _getDisplayValue( buttons ) ) {
			startLink = 'mobile-genesis-nav';
			endLink   = 'genesis-nav';
		}
		$( '.genesis-skip-link a[href^="#' + startLink + '"]' ).each( function() {
			var link = $( this ).attr( 'href' );
			link = link.replace( startLink, endLink );
			$( this ).attr( 'href', link );
		});
	}


	/**
	 * generic function to get the display value of an element
	 * @param  {id} $id ID to check
	 * @return {string}     CSS value of display property
	 */
	function _getDisplayValue( $id ) {
		var element = document.getElementById( $id ),
			style   = window.getComputedStyle( element );
		return style.getPropertyValue( 'display' );
	}

	/**
	 * Toggle aria attributes
	 * @param  {button} $this     passed through
	 * @param  {aria-xx} attribute aria attribute to toggle
	 * @return {bool}           from _ariaReturn
	 */
	function _toggleAria( $this, attribute ) {
		$this.attr( attribute, function( index, value ) {
			return 'false' === value;
		});
	}


  // Rename main content from genesis-content
	$('.content').attr('id', 'main');


  // Matching Element Height
		function matchHeight() {
		function setHeight(elementH) {
			var maxH = 0;
			var len = $(elementH).length;
			$(elementH).css("min-height", "");

			$(elementH).each(function (index) {
				var curH = $(this).outerHeight();
				if (curH > maxH) {
					maxH = curH;
				}

				if ((index + 1) == len) {
					$(elementH).css({ "min-height": maxH });
				}
			});
		}

    setHeight(".hero section .widget-wrap");
    setHeight(".matchHeightJS");
    setHeight(".matchHeightJS2");
    setHeight(".matchHeightJS3");
	}
	function responsiveFn() {
		matchHeight();
	}
	$(window).load(responsiveFn).resize(responsiveFn);


  // Smooth Scrolling
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	  	var offset = -25;
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top + offset
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


  // Scroll to Top
    var scrollup = $('.scrollup');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            scrollup.addClass("scrollup-slidein");
        } else {
            scrollup.removeClass("scrollup-slidein");
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


  // Scroll to Top - Other
    $(".scrollupBtn").click( function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});


  // Sticky nav on scroll - Home
  	if ($(window).width() > 1030) {
		$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > 50) {
		        $('.home .site-header').addClass('visible');
		    } else {
		        $('.home .site-header').removeClass('visible');
		    }
		});
	}


  // Slick Slider - Houses pages
  $(document).ready(function(){
  	$('.housesHero').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    nextArrow: '<a class="slick-prev-arrow slick-arrow"><img class="max30" src="./../../wp-content/themes/couchwood/images/arrow-right-circle.png" alt="arrow" /></a>',
	  	prevArrow: '<a class="slick-next-arrow slick-arrow"><img class="max30" src="./../../wp-content/themes/couchwood/images/arrow-left-circle.png" alt="arrow" /></a>',
	    draggable: false,
	    fade: true,
	    asNavFor: '.housesSlider',
	    responsive: [
		    {
		      breakpoint: 860,
		      settings: {
		        arrows: true
		      }
		    }
		]
	});
    $('.housesSlider').slick({
    	swipeToSlide: true,
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	nextArrow: '<a class="slick-prev-arrow slick-arrow"><img class="max30" src="./../../wp-content/themes/couchwood/images/arrow-right-circle.png" alt="arrow" /></a>',
	  	prevArrow: '<a class="slick-next-arrow slick-arrow"><img class="max30" src="./../../wp-content/themes/couchwood/images/arrow-left-circle.png" alt="arrow" /></a>',
	  	asNavFor: '.housesHero',
	  	responsive: [
		    {
		      breakpoint: 860,
		      settings: 'unslick'
		    }
		]
	});
  });


})( document, jQuery );
