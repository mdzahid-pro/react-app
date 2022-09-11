(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /*--------------------------------
           All category menu control
        --------------------------------*/

        if ($(window).width() < 992) {
            $(".mobile-style").removeClass("show");
        }

        if ($(window).width() < 768) {
            $(".index-03-catg").removeClass("show");
        }

        /*--------------------------------
            Cart Quantity Control
        --------------------------------*/
        $(document).on('click', '.decrease', function (event) {
            event.preventDefault();
            var el = $(this);
            var parentWrap = el.parent();
            var qty = parentWrap.find('.qty_');
            var qtyVal = qty.val();
            if (qtyVal > 1) {
                qty.val(parseInt(qtyVal) - 1);
            }
        });


        $(document).on('click', '.increase', function (event) {
            event.preventDefault();
            var el = $(this);
            var parentWrap = el.parent();
            var qty = parentWrap.find('.qty_');
            var qtyVal = qty.val();
            if (qtyVal > 0) {
                qty.val(parseInt(qtyVal) + 1);
            }
        });


        /*--------------------------------
            fancybox
        --------------------------------*/
        $('[data-fancybox]').fancybox({
            toolbar: false,
            smallBtn: true,
            animationEffect: "zoom-in-out",
        })


        /*------------------------------
            Header Slick Slider
        -------------------------------*/
        $('.header-slider-inst-index-01').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            arrows: false,
            autoplay: true,
            cssEase: 'linear',
            prevArrow: '<div class="prev-arrow"><i class="las la-angle-left"></i></div>',
            nextArrow: '<div class="next-arrow"> <i class="las la-angle-right"></i></div>',
        });


        /*------------------------------
            Category slider
        -------------------------------*/
        $('.category-slider-inst').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            speed: 800,
            arrows: true,
            autoplay: false,
            dots: false,
            prevArrow: '<div class="prev-arrow"> <i class="las la-chevron-left"></i> </div>',
            nextArrow: '<div class="next-arrow"> <i class="las la-chevron-right"></i> </div>',

            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        /*------------------------------
            Deal of the week index-02
        -------------------------------*/
        $('.deal-of-the-week-slider-inst-index-02').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 800,
            arrows: true,
            autoplay: true,
            dots: false,
            prevArrow: '<div class="prev-arrow"> <i class="las la-chevron-left"></i> </div>',
            nextArrow: '<div class="next-arrow"> <i class="las la-chevron-right"></i> </div>',

            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 451,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }

            ]
        });


        /*------------------------------
            custom product slider
        -------------------------------*/
        $('.custom-product-slider-inst').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            arrows: true,
            autoplay: false,
            dots: false,
            prevArrow: '<div class="prev-arrow"> <i class="las la-chevron-left"></i> </div>',
            nextArrow: '<div class="next-arrow"> <i class="las la-chevron-right"></i> </div>',

            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }

            ]
        });


        /*------------------------------
            brand item slider
        -------------------------------*/
        $('.brand-item-slider-inst').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            autoplay: false,
            dots: false,

            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }

            ]
        });

        /*------------------------------
            Shop Details Slick Slider
        -------------------------------*/

        $('.shop-details-gallery-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.shop-details-gallery-nav'
        });

        $('.shop-details-gallery-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.shop-details-gallery-slider',
            dots: false,
            arrows: false,
            focusOnSelect: true,
        });


        /*----------------------------------
            Portfolio area isotope jQuery
        ----------------------------------*/

        $(".btn-list li").on('click', function () {

            $(".btn-list li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".grid-wrapper, .custom-row").isotope({
                filter: selector
            });
        });


        /*------------------------------
            payment gateway selection
        -------------------------------*/

        $(".payment-gateway-list li").on('click', function () {

            $(".payment-gateway-list li").removeClass("selected");
            $(this).addClass("selected");
        });


        /*-----------------------------------
            Checkout page creat account
        ------------------------------------*/

        $(".creat-account-content-wrap").hide();

        $("#Check1").on('click', function () {

            $(".creat-account-content-wrap").toggle("1000");
        });


        /*-----------------------------------------
            Checkout page ship to another address
        -------------------------------------------*/

        $(".ship-another-address-content").hide();

        $("#ship").on('click', function () {

            $(".ship-another-address-content").toggle("1000");
        });


        /*------------------------------
            Checkout page coupon
        -------------------------------*/

        $(".login-content").hide();

        $("#login").on('click', function () {

            $(".login-content").toggle("1000");
        });


        /*------------------------------
            Checkout page shortcut login
        -------------------------------*/

        $(".coupon-content").hide();

        $("#coupon").on('click', function () {

            $(".coupon-content").toggle("1000");
        });


        /*------------------------------
            Countdown
        -------------------------------*/

        loopcounter('flash-countdown-1');
        loopcounter('flash-countdown-camp');
        loopcounter('flash-countdown-3');


        /*------------------------------
            Header Slider index-04
        -------------------------------*/

        $('.testimonial-slider-inst').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',

            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /*------------------------------
         Widget Range Control
        -------------------------------*/

        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));


        /*------------------------------------
        search popup
        -----------------------------------*/
        $(document).on('click', '#search_icon', function (e) {
            e.preventDefault();
            $('#search_popup').addClass('show');
        });
        $(document).on('click', '#search-popup-close-btn', function (e) {
            e.preventDefault();
            $('#search_popup').removeClass('show');
        });

        /*------------------------------------
        user account
        -----------------------------------*/
        $(".navigation-button-x").on('click', function () {
            $(".user-account-widget").slideToggle("1000");
        });
        if ($(window).width() < 768) {
            $(".user-account-widget").hide();
        }

    });


    /*------------------------------
           Scroll to top
    -------------------------------*/

    $(window).scroll(function () {

        if ($(this).scrollTop() > 800) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    })

    $(".scroll-to-top").click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    })


    $(window).on('load', function () {

        /*------------------------------
           Preloader
        -------------------------------*/

        $('.preloader-inner').fadeOut(1000);
    });

    // Window Resize

    // $(window).on('resize', function () {
    //     if ($(window).width() < 992) {
    //         $(".mobile-style").removeClass("show");
    //     }
    // });

}(jQuery));


/*------------------------------
       Shop View Details
-------------------------------*/

var sandwiches = document.querySelectorAll('.zoom-js-handle');

sandwiches.forEach(function (sandwich, index) {
    sandwich.addEventListener('mousemove', function (e) {
        zoomin(e)
    })
    sandwich.addEventListener('mouseleave', function (e) {
        var zoomer = e.currentTarget;
        zoomer.style.backgroundImage = '';
    })
});

function zoomin(e) {
    var zoomer = e.currentTarget;
    zoomer.style.backgroundImage = 'url(' + zoomer.getAttribute('data-src') + ')';
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}