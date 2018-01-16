$(document).ready(function(){
    $('.back-to-top').hide();
    $(window).scroll(function(){
        if ($(window).scrollTop() > $(window).height()*0.3) {
            $('.back-to-top').fadeIn();
        }else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function(){
        $('.back-to-top').fadeOut();
        $('html body').animate({scrollTop: 0}, 500);
    })
});