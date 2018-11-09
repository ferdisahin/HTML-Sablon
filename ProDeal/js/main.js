jQuery(document).ready(function() {
    
    var $window = $(window)

    /***** DEAL AREA *****/
    var mySwiper = new Swiper ('#dealarea .swiper-container', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        slidesPerView: 3,
          breakpoints: {
            768: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            1060: {
              slidesPerView: 2,
              spaceBetween: 20
            }              
          }        
    });
    
    /***** CLONE MENU *****/
    $( "#nav" ).clone().appendTo( ".hidenav" );
    
    /***** MENU FIXED *****/
    $window.on('scroll', function () {
        if ($window.scrollTop() > 150) {
            $('.hidenav').addClass("fixed");
        } else {
            $('.hidenav').removeClass("fixed");
        }
    });
    
    /***** MOBILE MENU *****/
    $('#nav .menubutton .fa').click(function() {
       $('#nav ul.menu').slideToggle(350); 
    });
    
});