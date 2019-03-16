(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        
        //  Default js start
   /*     $('.navbar-toggle').click(function() {
            if($(this).hasClass('click-effect')) {   
                $(this).removeClass('click-effect');
            }
            else{
                $(this).addClass('click-effect');
            }
        });*/
        //  Default js end
        
        //Slider
        $(".client-review").owlCarousel({
            items: 1,
            loop:true,
            nav:true,
            autoplay: true,
            
            navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
        
        $(".header-bottom button").click(function(){
        $(".nav-area").slideToggle();
            
          
    });
        
    });
    
    jQuery(window).load(function(){
        
    });
    
}(jQuery));	




