jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	var slid = jQuery('#block3_slider');
		
	slid.owlCarousel({
		items: 5,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<img src=../images/fa-angle-left.png>', '<img src=../images/fa-angle-right.png>'],
		dots: false,
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
				autoplay: true,
                navText: false
			},
			479:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
                navText: false
			},
			767:{
				items: 3,
				mouseDrag: true,
				dots: false,
				autoplay: true,
                navText: true
			},
			991:{
				items: 3,
				mouseDrag: true,
                navText: true
			},
			1099:{
				items: 4,
				mouseDrag: true
			}
		}
	});
	
	
	});