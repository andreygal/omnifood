$(document).ready(function() {
    /*Sticky Navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /*Scroll on Buttons*/
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 750);
    }) 
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
    })
    
    /*Navigation*/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            target.focus(); // Setting focus
            if (target.is(":focus")){ // Checking if the target was focused
              return false;
            } else {
              target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              target.focus(); // Setting focus
            };
            return false;
          }
        }
      });
    });
    
    /*Animation on Scroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    }); 
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    }); 
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /*MOBILE NAVIGATION*/
    $('.js--nav-icon').click(function() {
        console.log('uuuu');
        var nav = $('.js--main-nav');
        
        $('.menu').attr('name', function (i, attr) {
            return attr == 'menu' ? 'close' : 'menu'
        });
        
       
        nav.slideToggle(200);
        
   
    });
    
    
});   

