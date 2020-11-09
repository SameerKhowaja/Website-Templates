// Javascript
$(function($) {
    "use strict";

	/* SMOOTH SCROLL */
    $('.smooth').click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 750);
    });

});
