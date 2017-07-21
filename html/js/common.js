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

    /*******************************************************/
    //First Screen Slider
    /*******************************************************/
    var $banner = $('.banner');
    if ($banner.length > 1) {
        $banner.wrapAll('<div class="banner-slider owl-carousel"></div>');
    }
    $('.banner-slider').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 1200
    });


    /*******************************************************/
    //production Slider
    /*******************************************************/

    var $productionItem = $('.production__item');
    if ($productionItem.length > 1) {
        $productionItem.wrapAll('<div class="production__slider owl-carousel"></div>');
    }
    $('.production__slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 10000,
        autoplay: true,
        smartSpeed: 1200
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
