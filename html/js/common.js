$(function() {

    'use strict';

    //**********************************************************
    //Меню
    //**********************************************************

    var $headerNavButton = $('.header__nav-button'),
        $headerNav = $('.header__nav');
    $headerNavButton.click(function() {
        $(this).toggleClass('active');
        $headerNav.stop().slideToggle(300);
    });
    
    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(this).width();
        if (w > 640 && $headerNav.is(':hidden')) {
            $headerNav.removeAttr('style');
        }
    });

    //**********************************************************
    //Chrome Smooth Scroll
    //**********************************************************
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });


});
