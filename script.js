$(document).ready(function() {
    let cross = function() {
        $('nav .menu-toggle span:first-child').css({'transform': 'rotate(45deg) translate(-1px, -1px)'})
    }
    $('nav .menu-toggle').click(function() {
        if($(this).attr('class') == 'menu-toggle') {
            $(this).addClass('slide');
            $('nav ul').addClass('slide');
            $('nav .menu-toggle span:first-child').css({'transform': 'rotate(45deg) translate(-1px, -1px)', 'transform-origin': 'left center'})
            $('nav .menu-toggle span:nth-child(2)').css({'transform': 'scale(0)', 'opacity': '0'})
            $('nav .menu-toggle span:last-child').css({'transform': 'rotate(-45deg) translate(-1px, 0px)', 'transform-origin': 'left center'})
             
        } else {
            $(this).removeClass('slide');
            $('nav ul').removeClass('slide')
            $('nav .menu-toggle span:first-child').css({'transform': ''})
            $('nav .menu-toggle span:nth-child(2)').css({'transform': '', 'opacity': '1'})
            $('nav .menu-toggle span:last-child').css({'transform': ''})
        }

    });
});

