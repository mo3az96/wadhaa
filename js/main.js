

$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
});
$(document).ready(function () {
    if ($(window).width() < 769) {
        $(".slider-container").removeClass("container");
    } else {
        $(".slider-container").addClass("container");
    }
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            500: {
                navigation: false
            },
        }
    });

    var latestswiper = new Swiper('#latest .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: false,
        breakpoints: {
            500: {
                slidesPerView: 2,
                pagination: {
                    el: '#latest .swiper-pagination',
                    clickable: true,
                },
            },
            992: {
                slidesPerView: 3,
                pagination: {
                    el: '#latest .swiper-pagination',
                    clickable: true,
                },
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    var bestsellerswiper = new Swiper('#bestseller .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: false,
        breakpoints: {
            500: {
                slidesPerView: 2,
                pagination: {
                    el: '#bestseller .swiper-pagination',
                    clickable: true,
                },
            },
            992: {
                slidesPerView: 3,
                pagination: {
                    el: '#bestseller .swiper-pagination',
                    clickable: true,
                },
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    var specialsswiper = new Swiper('#specials .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: false,
        breakpoints: {
            500: {
                slidesPerView: 2,
                pagination: {
                    el: '#specials .swiper-pagination',
                    clickable: true,
                },
            },
            992: {
                slidesPerView: 3,
                pagination: {
                    el: '#specials .swiper-pagination',
                    clickable: true,
                },
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    var brandsswiper = new Swiper('.brands-cont .brands-slider', {
        slidesPerView: 10,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: false,
        breakpoints: {
            500: {
                slidesPerView: 3,
                pagination: {
                    el: '.brands-cont .swiper-pagination',
                    clickable: true,
                },

            },
            992: {
                slidesPerView: 5,
                pagination: {
                    el: '.brands-cont .swiper-pagination',
                    clickable: true,
                },
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });



    /////////ACC/////////
    if ($(window).width() <= 767) {
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
        console.log()
    })

    $('.mo-menu-icon').click(function () {
        $('.navbar-cont').show();
        $('.lang').fadeIn(500);
        $('.mo-navbar').addClass('inscreen');
        $('.mo-navbar').removeClass('outscreen');
        $("body").toggleClass("overflow");

    });
    $('.navbar-cont').click(function () {
        $('.navbar-cont').fadeOut(500);
        $('.lang').hide();
        $('.mo-navbar').addClass('outscreen');
        $('.mo-navbar').removeClass('inscreen');
        $("body").toggleClass("overflow");
    });

    $(".mo-navbar").click(function (e) {
        e.stopPropagation();
    });
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(500);
        $("body").toggleClass("overflow");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $('.navbar-cont').fadeOut(500);
        $('.lang').hide();
        $('.mo-navbar').addClass('outscreen');
        $('.mo-navbar').removeClass('inscreen');
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(300);
    });
});