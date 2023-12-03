/*jshint jquery:true */

$(document).ready(function($) {
	"use strict";
	
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});

				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/*-------------------------------------------------*/
	/* =  preloader function
	/*-------------------------------------------------*/
	
	$('#container').imagesLoaded(function(){
		$('.preloader').fadeOut(400, function(){
			$('#container').addClass('active');
		});
	});

	/*-------------------------------------------------*/
	/* =  nav animate
	/*-------------------------------------------------*/

	var OpenMenu = $('a.open-close-menu, a.open-close-fullmenu'),
		CloseMenu = $('a.close-menu'),
		MenuBox = $('.fixed-vertical-header, .full-menu'),
		toogleLink = $('a.toogle-link'),
		toogleMenu = $('.toogle-menu');

	OpenMenu.on('click', function(event) {
		event.preventDefault();
		MenuBox.addClass('active');
		$('.fixed-header').addClass('active');
	});

	CloseMenu.on('click', function(event) {
		event.preventDefault();
		MenuBox.removeClass('active');
		$('.fixed-header').removeClass('active');
	});

	var OpenLeftLink = $('a.open-close-leftmenu'),
		LeftMenuBox = $('.left-menu');

	OpenLeftLink.on('click', function(event) {
		event.preventDefault();
		LeftMenuBox.toggleClass('active');
	});

	toogleLink.on('click', function(event) {
		event.preventDefault();
		toogleMenu.toggleClass('active');
	});

	/*-------------------------------------------------*/
	/* =  nav drop animate
	/*-------------------------------------------------*/

	var menuDropLink = $('a.drop-link'),
		backLink = $('a.back-main-menu');

	menuDropLink.on('click', function(event) {
		event.preventDefault();
		$(this).parent('li').find('ul.second-level').slideToggle(400);
	});

	backLink.on('click', function(event) {
		event.preventDefault();
		$(this).parents('li').find('ul.second-level').fadeToggle(400);
	});


	/*-------------------------------------------------*/
	/* =  fullscreen toogle
	/*-------------------------------------------------*/

	var OpenFullscreenLink = $('a.fullscreen-link');
	var elem = document.documentElement;

	OpenFullscreenLink.on('click', function(event) {
		event.preventDefault();
		if ( !$(this).hasClass('active')) {
			openFullscreen();
			$(this).addClass('active');
		} else {
			closeFullscreen();
			$(this).removeClass('active');
		}
		
	});


	function openFullscreen() {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
	}

	/* Function to close fullscreen mode */
	function closeFullscreen() {
		if (document.exitFullscreen) {
		 	document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
		 	document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
		 	document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
		 	document.msExitFullscreen();
		}
	}
	/*-------------------------------------------------*/
	/* =  filter categories and date menu
	/*-------------------------------------------------*/

	var filterLink = $('a.filter-link');

	filterLink.on('click', function(event) {
		event.preventDefault();
		$(this).parent('.category-filter').find('ul.filter').toggleClass('active');
	});

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	// Example with multiple objects
	$('a.iframe').magnificPopup({
		type: 'iframe'
	});

	// Example with multiple objects
	$('a.image-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	var skillBar = $('.skills-box');
	skillBar.appear(function() {

		var animateElement = $(".meter > p");
		animateElement.each(function() {
			$(this)
				.data("origWidth", $(this).width())
				.width(0)
				.animate({
					width: $(this).data("origWidth")
				}, 1200);
		});

	});

	/*-------------------------------------------------*/
	/* =  multiscroll
	/*-------------------------------------------------*/

	
	try{

		$('#multiscroll').multiscroll({
			navigation: false,
			navigationPosition: 'center',
			navigationColor: '#000',
			navigationTooltips: [],
			paddingTop: 0,
			paddingBottom: 0,

			//responsive
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveExpand: true
		});

	} catch(err) {
	}
	
	$('a.prev-section').on('click', function(event) {
		event.preventDefault();
		$.fn.multiscroll.moveSectionUp();
	});

	$('a.next-section').on('click', function(event) {
		event.preventDefault();
		$.fn.multiscroll.moveSectionDown();
	});

	/*-------------------------------------------------*/
	/* =  home album, magnific popup
	/*-------------------------------------------------*/

	$('.gallery-link').on('click', function () {
	    $(this).find('.gallery').magnificPopup('open');
	});

	$('.gallery').each(function () {
	    $(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        gallery: {
	            enabled: true
	        }
	    });
	});
	
	/*-------------------------------------------------*/
	/* =  Home Gallery scrolling between sections, 
	/* =  Fullscreen height of photo posts
	/*-------------------------------------------------*/
	

	// scroll between sections

	$('.scroller-list li a[href*=#]').on('click', function(event) {
		event.preventDefault();
		var offset = 0;
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - offset
		}, 500, 'linear');
	});

	//  add active state in scroll menu list for active section

	$('section.photo-post').each(function() {
		$(this).waypoint( function( direction ) {
			if( direction === 'down' ) {
				var containerID = $(this).attr('id');
				/* update navigation */
				$('.scroller-list li a').removeClass('active');
				$('.scroller-list li a[href*=#'+containerID+']').addClass('active');
			}
		} , { offset: '10px' } );
		
		$(this).waypoint( function( direction ) {
			if( direction === 'up' ) {
				var containerID = $(this).attr('id');
				/* update navigation */
				$('.scroller-list li a').removeClass('active');
				$('.scroller-list li a[href*=#'+containerID+']').addClass('active');
			}
		} , { offset: function() { return -$(this).height() + 2; } });
	});

	/*-------------------------------------------------*/
	/* =  OWL carousell
	/*-------------------------------------------------*/

	var owlWrap = $('.owl-wrapper');

	if (owlWrap.length > 0) {

		if (jQuery().owlCarousel) {
			owlWrap.each(function(){

				var carousel= $(this).find('.owl-carousel'),
					dataNum = $(this).find('.owl-carousel').attr('data-num'),
					dataNum2,
					dataNum3;

				if ( dataNum == 1 ) {
					dataNum2 = 1;
					dataNum3 = 1;
				} else if ( dataNum == 2 ) {
					dataNum2 = 2;
					dataNum3 = dataNum - 1;
				} else {
					dataNum2 = dataNum - 1;
					dataNum3 = dataNum - 2;
				}

				carousel.owlCarousel({
					autoPlay: 5000,
					nav: true,
					items : dataNum,
					responsive: {
						0:{
							items:dataNum3,
							nav:true
						},
						768:{
							items:dataNum2,
							nav:false
						},
						1100:{
							items:dataNum,
							nav:true,
							loop:false
						}
					}
				});

			});
		}
	}

	$('.center-active-state').owlCarousel({
		autoplay: true,
		center: true,
		items : 3,
		loop: true,
		nav: true,
		responsive: {
			0:{
				items:1,
				nav:true
			},
			768:{
				items:2,
				nav:true
			},
			1100:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Load more posts from container
	/* ---------------------------------------------------------------------- */

	var LoadButton = $('a.load-post-container'),
		PortContainer = ('.iso-call'),
		i = 0,
		s = 0;

	LoadButton.on( 'click', function(event) {
		event.preventDefault();

		var LoadContainer = $(this).attr('data-load'),
			xel = parseInt($(this).attr('data-number'), 10);

		var storage = document.createElement('div');
		$(storage).load(LoadContainer + " .photo-post, .blog-post", function(){

			var elemloadedLength = $(storage).find('.photo-post, .blog-post').length;
			
			if ( !((s + 1) > elemloadedLength) ) {

				s = i + xel;

				var t = i - 1;
				var $elems;

				if ( i === 0 ) {
					/// create new item elements
					$elems = $(storage).find(".photo-post:lt(" + s + "), .blog-post:lt(" + s + ")").appendTo(PortContainer);
					// append elements to container
					$container.isotope( 'appended', $elems );
					setTimeout(Resize, 200);

				} else {
					/// create new item elements
					$elems = $(storage).find(".photo-post:lt(" + s + "):gt("+ t +"), .blog-post:lt(" + s + "):gt("+ t +")").appendTo(PortContainer);
					// append elements to container
					$container.isotope( 'appended', $elems );
					
					setTimeout(Resize, 200);
				}

				i = i + xel;
			}

			if ( !( s < elemloadedLength ) ) {
				$('a.load-post-container').text("No more posts");
			}

		});
	
	});
	
	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/

	var SliderPost = $('.flexslider');

	SliderPost.flexslider({
		slideshowSpeed: 10000,
		easing: "swing"
	});
	
	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/

	var animateTopButton = $('.go-top'),
		htmBody = $('html, body');
		
	animateTopButton.on('click', function(){
		htmBody.animate({scrollTop: 0}, 'slow');
		return false;
	});
	
	/*-------------------------------------------------*/
	/* =  Comming soon section
	/*-------------------------------------------------*/

	$('.comming-soon-section').css('min-height', $(window).height());

	try {

		$('#clock').countdown("2019/08/17", function(event) {
			var $this = $(this);
			switch(event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "daysLeft":
					$this.find('span#'+event.type).html(event.value);
					break;
				case "finished":
					$this.hide();
					break;
			}
		});

	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-danger').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 40;
			document.querySelector( 'header, a.go-top' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 100 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'header' ).addClass('active');
				$( 'a.go-top' ).addClass('active');
			}
			else {
				$( 'header' ).removeClass('active');
				$( 'a.go-top' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
	})();

});

function Resize() {
	$(window).trigger('resize');
}
	
/* ---------------------------------------------------------------------- */
/*	works carousel
/* ---------------------------------------------------------------------- */

$(window).on('load', function() {
	var winDowHeight = $(window).outerHeight(),
		headerHeight = $('header .navbar').outerHeight(),
		footerHeight = $('footer').outerHeight();
	var photoHeight = parseInt(winDowHeight, 10) - parseInt(headerHeight, 10) - parseInt(footerHeight, 10);
	$('.carousel-photo .photo-post').height(photoHeight);
	$('.gal-style-section .photo-post').height(winDowHeight);
});
$(window).on('resize', function() {
	var winDowHeight = $(window).outerHeight(),
		headerHeight = $('header .navbar').outerHeight(),
		footerHeight = $('footer').outerHeight();
	var photoHeight = parseInt(winDowHeight, 10) - parseInt(headerHeight, 10) - parseInt(footerHeight, 10);
	$('.carousel-photo .photo-post').height(photoHeight);
	$('.gal-style-section .photo-post').height(winDowHeight);
});
