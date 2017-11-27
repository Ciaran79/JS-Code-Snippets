$(document).ready(function(){
            $('ul li a').click(function(){
                $('li a').removeClass('current');
                $(this).addClass('current');
            });
        });
