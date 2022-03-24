$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('.backtop').fadeIn();
        } else {
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    })
});

$(document).ready(function($){
    let $root = $('html, body');
    $('a[href^="#"]').click(function() {
        let href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
         
        return false;
    });
 
});