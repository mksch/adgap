(function($) {
//******************************************************************
// document loaded functions
//******************************************************************/


var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

//******************************************************************
//  menu toggle button actions
//******************************************************************/
	
function initNavToggle() {
	$('.menu-toggle').on('click', function(e){
			e.preventDefault();
			$('.menu-toggle').toggleClass('menu-open');
			$('.main-nav .level0').toggleClass('menu-open');
		});

// toggle on main menu on small devices
		
		$('.main-nav .sub-toggle').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('menu-open');
			$(this).siblings('.dropmenu').toggleClass('menu-open');
			$(this).siblings('.submenu').toggleClass('menu-open');
		});

// toggle on submenus on mobile
		
		$('.mobile-toggle').on('click', function(e){
			e.preventDefault();
		  $(this).toggleClass('menu-open');
			$(this).siblings('ul').toggleClass('menu-open');
		});
	
}

/*
//******************************************************************
//  sliders
//******************************************************************/

function initSlider() {
	$("#owl-slider").owlCarousel({
		items:1,
		loop: true,
		dots:true,
		autoplay:true,
    autoplayTimeout:15000,
		nav:true,
		navText: [
      "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
      "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
      ],
	});
}


/*
//******************************************************************
//  drop down menus from main nav
//******************************************************************/
 
function addMega(){
	 var item = $(this);
	 if (!isTouch) {
		  if (!item.hasClass("hovering")) {
			  item.addClass("hovering");
				item.children("ul").addClass("active");
		  }
	 }
}
  
function removeMega(){
  $('.level0 > li').removeClass("hovering");
 }
  //Set custom configurations

function initDropMenu() {
	var megaConfig = {
	    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
	    interval: 60, // number = milliseconds for onMouseOver polling interval
	    over: addMega, // function = onMouseOver callback (REQUIRED)
	    timeout: 60, // number = milliseconds delay before onMouseOut
	    out: removeMega // function = onMouseOut callback (REQUIRED)
	};
	
	$(".level0 > li").hoverIntent(megaConfig);
} 


//******************************************************************
//  Accordion div's Show Hide
//******************************************************************/

function initAccordion() {
 $('.ac-prompt').bind('click', function() {
			var row = $(this).parent('.accordion-row');            			
			var height = $(".ac-content .content-wrapper", row).height();
			row.toggleClass("open");
			$(this).toggleClass("open");
			if (row.hasClass("open")) {
				$(".ac-content", row).css("max-height", height + 40);				
			}
			else {
				$(".ac-content", row).css("max-height", 0);
			}
}); 
	
} 



//******************************************************************
// Open external links in new window
//******************************************************************/
function initSettings() {
	
// Open external links in a new window or tab
  $(document).on('click', 'a[rel$="external"]', function() {
    $(this).attr('target', "_blank");
  });
  $(document).on('click', 'a[href$=".pdf"]', function() {
    $(this).attr('target', "_blank");
  });
  // Open all urls that don't belong to our domain in a new window or tab
  $(document).on('click', "a[href^='http:']:not([href*='" + window.location.host + "'])", function() {
    $(this).attr("target", "_blank");
  });	
  // Open all urls that don't belong to our domain in a new window or tab
  $(document).on('click', "a[href^='https:']:not([href*='" + window.location.host + "'])", function() {
    $(this).attr("target", "_blank");
  });	
	
	$("a[href*='http://'], a[href*='https://']").not("[href*='"+location.hostname.replace("www.","")+"']").each(function() {
		jQuery(this).click(function(event) {
		  event.preventDefault();
			event.stopPropagation();
			window.open(this.href, '_blank');
			}).addClass('externalLink');
	});

  /* find the mediaquery size */	
	$('body').attr('data-media', Foundation.MediaQuery.current);


}

	
	//******************************************************************
	//  Search block
	//******************************************************************/
/*
	$(".hia-search-input").focus(function () {
		if (!$(".hia-search-form").hasClass("open")) {
			$(".hia-search-form").addClass("open");
		} 
	});
	$(".hia-search-input").focusout(function () {
	   $(".hia-search-form").removeClass("open");
	});
*/
	
	$(".search-btn").click(function () {
		if (!$(".search-block-form").hasClass("open")) {
			$(".search-block-form").addClass("open");
		} else {
	   $(".search-block-form").removeClass("open");
	  }
	});
	$(".search-submit").click(function () {
	   $(".search-block-form").removeClass("open");
	});
	$(".search-close").click(function () {
	   $(".search-block-form").removeClass("open");
});	

//
// iPads don't hover...
//

function initTouch() {

// 	when on an ipad, hover won't work, so turn it off, and use a click function to activate breadcrumb menus
// crumb-toggle is only displayed on large screens.  On smallerscreens there is a click event on mobile-toggle above.
	if(isTouch) {
			$('[hover="on"]').attr("hover", "off");
			$('.crumb-down .drop-down .crumb-toggle').on('click touch', function(event) {
				var dropdown = $(this).parent();
				$('.crumb-down .drop-down').not(dropdown).removeClass('open');	// close other open crumb menus				
				$(dropdown).toggleClass('open');
			});	
	}
	else {
		$('[hover="off"]').attr("hover", "on");
	}
}

//
// Print function
//


function initPrint () {
 $('.adgap-print').bind('click', function(e) {
		e.preventDefault();
		window.print();	
		return false;
 });
}



//
// Scroll to Top feature
//

function scrollTop () {
   $("#back-top").hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
}


$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
	if (newSize !== oldSize) {
			if (newSize == 'large' || newSize == 'xlarge' || newSize == 'xxlarge') {
				$('body').attr('data-media', 'large');
			}
			else {
				$('body').attr('data-media', newSize);
//				$('*').removeClass('menu-open');
			}	
			// close submenus that were opened on small window when size changes	
		  $('.mobile-toggle').removeClass('menu-open');
			$('.mobile-toggle').siblings('ul').removeClass('menu-open');
	}
});

window.onload = function(e)
{
	/* open sidebar menus in active trail */
}; 

$(document).ready(function() {
	initSettings();
	scrollTop();
	initPrint();
	initTouch();
	initDropMenu();
	initAccordion();
	initSlider();
	initNavToggle();
	$('.responsive').cardtable(); /* make tables marked as responsive stack on small screens */
	//$('table').cardtable();
	//$(document).foundation();
});

}(jQuery));


