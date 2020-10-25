$(document).ready(function() {

    AOS.init({ 
       duration: 1500,
       easing: 'ease-out-back',
       once: true
    });

    var resizeTimer;
    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if ($(window).width() > 900) {
                $('.navbar').show();
            } else {
                $('.navbar').hide();
            }
        }, 10);
    });

    $('.js-nav-icon').click(function() {
        var nav = $('.js-navbar');
        var icon = $('.js-nav-icon ion-icon');

        icon.attr('name', function(index, attribute) {
            return attribute == 'menu-outline' ? 'close-outline' : 'menu-outline';
        });

        nav.slideToggle(200);
    });
});