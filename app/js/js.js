jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	var slid = jQuery('#block7_slider');
		
	slid.owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: true,
		mouseDrag: true, 
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false
			},
			767:{
				items: 1,
				mouseDrag: true,
				dots: true,
				autoplay: true
			},
			991:{
				items: 1,
				mouseDrag: true
			},
			1099:{
				items: 1,
				mouseDrag: true
			}
		}
	});
	
	
	});