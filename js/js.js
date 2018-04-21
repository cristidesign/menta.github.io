$(document).ready(function() {
  'use strict';

  /* Show and hide menu */

    var navbar = $('.navbar');

    var navbar_def = $('.navbar-default');

    $(window).scroll(function() {
                
      if($(window).scrollTop() < 80 ) {
            
        navbar.css ({
           'margin-top': '-100px',
            'opacity': '0'
        });
            
        navbar_def.css({
            'background-color': 'rgba(59, 59 , 59, 0)'
        });
            
      } else {
            
          navbar.css ({
             'margin-top': '0px',
             'opacity': '1'
          });
              
          navbar_def.css({
             'background-color': 'rgba(59, 59 , 59, 0.7)',
             'border-color': '#444'
          });
          
          $('.navbar-brand img').css({
             'height': '35px',
             'padding-top': '0px'
          });
            
          $('.navbar-nav > li > a ').css({
             'padding-top': '15px'
          });
            
        }
       
    });



	//add smooth scrolling

  	$('.nav-item, #scroll-to-top').on("click", function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });



	/* active menu item on click */

    var nav_n = $('.navbar-nav li a');

	  nav_n.on("click", function() {
               
        nav_n.parent().removeClass("active");
        
        $(this).parent().addClass("active");
    
    });



  // highlight menu item on scroll

    $(window).scroll( function() {
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
        });
    
    });



  // add auto padding to header 

    var head_c = $(".header-container");

    setInterval( function() {
        
        var windowHeight = $(window).height();
        
        var containerHeight = head_c.height();
        
        var padTop = windowHeight - containerHeight;
        
        head_c.css({
            
          'padding-top': Math.round( padTop / 2) + 'px',
          'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });
        
    }, 10);



	// Add animation/ Initialize Woo
    
    new WOW().init();



  // Add counter
        
    $('.counter-num').counterUp({
         delay: 10,
         time: 2000
      });



  //nicescroll 

    $("html").niceScroll({
        styler:"fb",
        cursorcolor :"#0da32d",
        cursorborder : "0px",
        cursoropacitymin : 0.5,
        //bouncescroll : true,
        spacebarenabled : true,
        scrollspeed : 40,
        mousescrollstep : 40,
        zindex : 99999,
        cursorborderradius : 3,
        cursorwidth : 12,
        enabletranslate3d : false,
        //smoothscroll : false
        hidecursordelay : 150
    });

});








