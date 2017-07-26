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
    // var $banner = $('.banner');
    // if ($banner.length > 1) {
    //     $banner.wrapAll('<div class="banner-slider owl-carousel"></div>');
    //     $('.banner-slider').owlCarousel({
    //         animateOut: 'fadeOut',
    //         animateIn: 'fadeIn',
    //         loop: true,
    //         items: 1,
    //         nav: true,
    //         navText: '',
    //         autoplayTimeout: 5000,
    //         autoplay: true,
    //         smartSpeed: 1200
    //     });
    // }



    /*******************************************************/
    //production Slider
    /*******************************************************/

    var $productionItem = $('.production__item');
    if ($productionItem.length > 1) {
        $productionItem.wrapAll('<div class="production__slider owl-carousel"></div>');
        $('.production__slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            navText: '',
            autoplayTimeout: 10000,
            autoplay: true,
            smartSpeed: 1200
        });
    }

    /*******************************************************/
    //production Slider
    /*******************************************************/

    var $servicesItem = $('.services__item');
    if ($servicesItem.length > 1) {
        $servicesItem.wrapAll('<div class="services__slider owl-carousel"></div>');
        $('.services__slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            navText: '',
            autoplayTimeout: 10000,
            autoplay: true,
            smartSpeed: 1200
        });
    }


    /*******************************************************/
    //equalheight
    /*******************************************************/
    $('.procurement__item-text').equalHeight();

    /*******************************************************/
    //HOVER FOR IOS
    /*******************************************************/
    $('.catalog__item').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });

    //--------------------------------------------------------------------
    //Яндекс карта
    //--------------------------------------------------------------------

    if (typeof ymaps === 'object' && $('#map').length) {
        var myMap;
        ymaps.ready(function() {
            myMap = new ymaps.Map('map', {
                    center: [57.541317, 39.937707],
                    zoom: 15,
                    controls: ['zoomControl'],
                    behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
                }, {
                    searchControlProvider: 'yandex#search'
                }),
            myMap.geoObjects.add(new ymaps.Placemark([57.541294, 39.935405], {
                iconCaption: '2-я Транспортная, дом 1'
            },{
                preset: 'islands#redDotIconWithCaption'
            }));
            function disableDrag() {
                var w = $(window).width();
                if (w < 768) {
                    myMap.behaviors.disable('drag');
                } else {
                    myMap.behaviors.enable('drag');
                }
            }
            disableDrag();
            $(window).resize(function() {
                disableDrag();
            });
        });
    }

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
