// With JavaScript




//with jQuery

jQuery(document).ready(function( $ ){

    $(window).scroll(function() {

    if ($(this).scrollTop() > 1){  

        $('site-header').addClass("sticky");

    }

    else{

        $('site-header').removeClass("sticky");

    }

}); 

});
