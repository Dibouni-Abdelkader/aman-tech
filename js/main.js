/*global $,window*/

$(function () {

    'use strict';
    var upperH = $('.upper-bar').innerHeight(),
        navH = $('nav').innerHeight();

    $('.slider .carousel-item').height(($(window).height() - (upperH + navH)));



    //Trigger NiceScroll
    $('html').niceScroll({

        cursorcolor: "#006BCB",
        cursorwidth: '10px',
        cursorborder: 'none',
        cursorborderradius: '0',
        zIndex: '9999'
    });


    // Back to Top Button

    var BackToTop = $('.back-to-top');

    BackToTop.click(function (e) {

        e.preventDefault();
        $('html, body').animate({

            scrollTop: 0

        }, 600);
    });

    $(window).on('scroll', function () {

        if ($(this).scrollTop() >= 500) {

            if (BackToTop.is(':hidden')) {

                BackToTop.fadeIn();
            }
        } else {

            BackToTop.fadeOut();
        }



    });
});
