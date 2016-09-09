/*! Customized Jquery from Punit Korat.  punit@templatetrip.com  : www.templatetrip.com
Authors & copyright (c) 2016: TemplateTrip - Webzeel Services(addonScript). */
/*! NOTE: This Javascript is licensed under two options: a commercial license, a commercial OEM license and Copyright by Webzeel Services - For use Only with TemplateTrip Themes for our Customers*/
$(document).ready(function() {

	$( "body" ).append( "<div id='goToTop' title='Top'></div>" );
	$("#goToTop").hide();
	
	$("#form-currency button.dropdown-toggle").click(function() {
		$( ".currency-toggle" ).toggle( "2000" );
	});
	$("#form-language button.dropdown-toggle").click(function() {
		$( ".language-toggle" ).toggle( "2000" );
	});

	$("#top-links a.dropdown-toggle").click(function() {
		$( ".account-link-toggle" ).toggle( "2000" );
	});
	$("#cart button.dropdown-toggle").click(function() {
		$( ".header-cart-toggle" ).toggle( "2000" );
	});

	$(".option-filter .list-group-items a").click(function() {
		$(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
	});

	$("ul.breadcrumb li:nth-last-child(1) a").addClass('last-breadcrumb').removeAttr('href');

	$("#column-left .products-list .product-thumb, #column-right .products-list .product-thumb").unwrap();

	$("#content > h1, .account-wishlist #content > h2, .account-address #content > h2, .account-download #content > h2").first().addClass("page-title");

	$("#content > .page-title").wrap("<div class='page-title-wrapper'><div class='container'></div></div>");
	$(".page-title-wrapper .container").append($("ul.breadcrumb"));
	
	$("body > .menu-container").after($("#content > .page-title-wrapper"));

	$('#column-left .product-thumb .image, #column-right .product-thumb .image').attr('class', 'image col-xs-5 col-sm-5 col-md-4');
	$('#column-left .product-thumb .thumb-description, #column-right .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-7 col-md-8');

		$('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-5 col-sm-5 col-md-4');
		$('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-7 col-md-8');
		$('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
		$('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');

	$('select.form-control').wrap("<div class='select-wrapper'></div>");

/*
	if($('.TTProduct-Tab .tab-content .np-effect').hasClass('active')) {
		$(".TTProduct-Tab").find('.customNavigation').css('display','none');
	} else {
		$(".TTProduct-Tab").find('.customNavigation').css('display','block');
	}
*/
// Carousel Counter
colsCarousel = $('#column-right, #column-left').length;
if (colsCarousel == 2) {
	ci=2;
} else if (colsCarousel == 1) {
	ci=3;
} else {
	ci=4;
}

// product Carousel
$("#content .products-carousel").owlCarousel({
	items: ci,
	itemsDesktop : [1200,4], 
	itemsDesktopSmall : [991,3], 
	itemsTablet: [767,2], 
	itemsMobile : [480,1], 
	navigation: true,
	pagination: false
});

$(".customNavigation .next").click(function(){
	$(this).parent().parent().find(".products-carousel").trigger('owl.next');
})
$(".customNavigation .prev").click(function(){
	$(this).parent().parent().find(".products-carousel").trigger('owl.prev');
})
$(".products-list .customNavigation").addClass('owl-navigation');



var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(!isMobile) {
		if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
		}else{
		$(".parallex").sitManParallex({  invert: true });
	}	
	var bannerproduct = $("#tttestimonial-carousel");
      bannerproduct.owlCarousel({
     	 items : 1, //10 items above 1000px browser width
     	 itemsDesktop : [1200,1], 
     	 itemsDesktopSmall : [991,1], 
     	 itemsTablet: [767,1], 
     	 itemsMobile : [480,1] 
      });
	 
	  var ttblog = $("#ttsmartblog-carousel");
      ttblog.owlCarousel({
     	 items : 2, //10 items above 1000px browser width
     	 itemsDesktop : [1200,2], 
     	 itemsDesktopSmall : [991,2], 
     	 itemsTablet: [767,2], 
     	 itemsMobile : [480,1],
		 navigation:true,
		 pagination:false
      });
	  
	  $(".blog_prev").click(function(){
        ttblog.trigger('owl.prev');
      });
      $(".blog_next").click(function(){
        ttblog.trigger('owl.next');
      });


/* Slider Load Spinner */
$(window).load(function() { 
	$(".slideshow-panel .ttloading-bg").removeClass("ttloader");
});

/* Go to Top JS START */
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('#goToTop').fadeIn();
			} else {
				$('#goToTop').fadeOut();
			}
		});
	
		// scroll body to 0px on click
		$('#goToTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
	/* Go to Top JS END */

	/* Active class in Product List Grid START */
	$('#list-view').click(function() {
		$('#grid-view').removeClass('active');
		$('#list-view').addClass('active');
		$('#content .row > .product-list .product-thumb .image').attr('class', 'image col-xs-5 col-sm-5 col-md-4');
		$('#content .row > .product-list .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-7 col-sm-7 col-md-8');
	});
	$('#grid-view').click(function() {
		$('#list-view').removeClass('active');
		$('#grid-view').addClass('active');
		$('#content .row > .product-grid .product-thumb .image').attr('class', 'image col-xs-12');
		$('#content .row > .product-grid .product-thumb .thumb-description').attr('class', 'thumb-description col-xs-12');
	});
	if (localStorage.getItem('display') == 'list') {
		$('#list-view').addClass('active');
	} else {
		$('#grid-view').addClass('active');
	}
	/* Active class in Product List Grid END */
	
	
	$(".ttsearch_button").click(function() {
									 	
			$('.ttsearchtoggle').parent().toggleClass('active');
			$('.ttsearchtoggle').toggle('fast', function() {
			});
			$('.ttsearchtoggle .input-lg').attr('autofocus', 'autofocus').focus();
		});


	/* --------------------- TT - CMS Service Sameheight --------------------------- */
		
	function sameheight(){
		if ($(document).width() > 767){		
			var maxHeight = $("#ttcmsservices .services").height();
			$("#ttcmsservices").height(maxHeight);
			$(".ttservicebanner").height(maxHeight);
			$(".services").height(maxHeight);
			
		}else{
			$("#ttcmsservices").height("auto");
			$(".ttservicebanner").height("auto");
			$(".services").height("auto");
		}
	}
	
	$(window).resize(function(){sameheight();});
	$(window).load(function(){sameheight();});

});
function footerToggle() {
	if($( window ).width() < 768) {
		$("footer .footer-column h5").addClass( "toggle" );
		$("footer .footer-column ul").css( 'display', 'none' );
		$("footer .footer-column.active ul").css( 'display', 'block' );
		$("footer .footer-column h5.toggle").unbind("click");
		$("footer .footer-column h5.toggle").click(function() {
			$(this).parent().toggleClass('active').find('ul.list-unstyled').slideToggle( "slow" );
		});
		
		$("footer .footer-top-cms h5").addClass( "toggle" );
		$("footer .footer-top-cms ul").css( 'display', 'none' );
		$("footer .footer-top-cms.active ul").css( 'display', 'block' );
		$("footer .footer-top-cms h5.toggle").unbind("click");
		$("footer .footer-top-cms h5.toggle").click(function() {
			$(this).parent().toggleClass('active').find('ul.list-unstyled').slideToggle( "slow" );
		});
		
	} else {
		$("footer .footer-column h5").removeClass('toggle');
		$("footer .footer-column ul.list-unstyled").css('display', 'block');
	}
}
$(document).ready(function() {footerToggle();});
$(window).resize(function() {footerToggle();});


/* Category List - Tree View */
function categoryListTreeView() {
	$(".category-treeview li.category-li").find("ul").parent().prepend("<div class='list-tree'></div>").find("ul").css('display','none');

	$(".category-treeview li.category-li.category-active").find("ul").css('display','block');
	$(".category-treeview li.category-li.category-active").toggleClass('active');
}
$(document).ready(function() {categoryListTreeView();});


/* Category List - TreeView Toggle */
function categoryListTreeViewToggle() {
	$(".category-treeview li.category-li .list-tree").click(function() {
		$(this).parent().toggleClass('active').find('ul').slideToggle();
	});
}
$(document).ready(function() {categoryListTreeViewToggle();});
$(document).ready(function(){ menuMore(); })
function menuToggle() {
	if($( window ).width() < 768) {
		$("#menu .navbar-collapse > ul > li.dropdown > i").remove(".fa.fa-angle-down");
		$("#menu .navbar-collapse > ul > li.dropdown > a").after("<i class='fa fa-angle-down'></i>");
		$("#menu .navbar-collapse > ul > li.dropdown.more-menu > i").remove(".fa.fa-angle-down");
		$("#menu .navbar-collapse > ul > li.dropdown.more-menu > span").after("<i class='fa fa-angle-down'></i>");
	} else {
		$("#menu .navbar-collapse > ul > li.dropdown > i").remove(".fa.fa-angle-down");
	}

	/* menu item toggle active */
	$("#menu .navbar-collapse> ul li.dropdown > i").click(function() {
		$(this).parent().toggleClass('active').find(".dropdown-menu").first().slideToggle();
	});
	$("#menu .navbar-collapse> ul li.dropdown.more-menu > span").click(function() {
		$(this).parent().toggleClass('active').find(".dropdown-menu").first().slideToggle();
	});
}
$(document).ready(function() {menuToggle();});
$( window ).resize(function(){menuToggle();});


/* Animate effect on Review Links - Product Page */
$(".product-total-review, .product-write-review").click(function() {
    $('html, body').animate({ scrollTop: $(".product-tabs").offset().top }, 1000);
});

/* Main Menu - MORE items */
function menuMore(){
	//$(function($){
	var max_items = 4;
	var liItems = $('.navbar-nav > li');
	var remainItems = liItems.slice(max_items, liItems.length);
	remainItems.wrapAll('<li class="dropdown more-menu"><div class="dropdown-menu"><div class="dropdown-inner"><ul class="list-unstyled childs_1">');
	$('.more-menu').prepend('<span>More</span>');
	//});
}


/* FilterBox - Responsive Content*/

/*****************start animation script*******************/
function hb_animated_contents() {
	$(".hb-animate-element:in-viewport").each(function (i) {
	var $this = $(this);
	if (!$this.hasClass('hb-in-viewport')) {
	setTimeout(function () {
	$this.addClass('hb-in-viewport');
	}, 180 * i);
	}
	});
	}
	$(window).scroll(function () {
	hb_animated_contents();
	});
	$(window).load(function () {
	hb_animated_contents();
});
/*****************end animation script*******************/




function optionFilter(){

	if ($(window).width() <= 767) {
		$('#column-left .option-filter-box').appendTo('.row #content .category-list');
		$('#column-right .option-filter-box').appendTo('.row #content .category-list');
	} else {
		$('.row #content .category-list .option-filter-box').appendTo('#column-left .option-filter');
		$('.row #content .category-list .option-filter-box').appendTo('#column-right .option-filter');
	}
}
$(document).ready(function(){ optionFilter(); });
$(window).resize(function(){ optionFilter(); });
