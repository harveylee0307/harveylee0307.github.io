$(function() {


    var lastScrollVal = 0
    $(window).scroll(function(e) {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > lastScrollVal) {
            $('header').addClass('scrollUp');
            $('nav').removeClass('show');
             $('.menu_icon').addClass('icon-navicon').removeClass('icon-remove');
        }else if(scrollVal < 0){
            $('header').removeClass('scrollUp');
        }else{
            $('header').removeClass('scrollUp');
        }
        lastScrollVal = scrollVal;
    });

    $('.menu_icon').on('click', function() {
        $('nav').toggleClass('show');
        $(this).toggleClass('active').toggleClass('icon-navicon').toggleClass('icon-remove');
        })

    /*Scroll transition to anchor*/
    $("nav a").on('click', function(e) {
        var nhref = e.target.href;
        var hash = nhref.substring(nhref.indexOf("#") + 1);
        $('html, body').animate({
            scrollTop: $('#' + hash).offset().top
        }, 500);
        return false;
    });

    /** Banner Parallax */
    $(window).scroll(function() {
        scrollBanner();


        // var bottom_of_object = $('#Portfolio').offset().top + $('#Portfolio').outerHeight();
        // var bottom_of_window = $(window).scrollTop() + $(window).height();

        // if(bottom_of_window>bottom_of_object){
        //   $('#Portfolio').addClass('bgrun');
        // }


    });

    /** Parallax Banner Function  */
    var scrollBanner = function() {
        /** Get the scroll position of the page */
        scrollPos = $(this).scrollTop();

        /** Scroll and fade out the banner text */
        $('.topText').css({
            'opacity': 1 - (scrollPos / 210),
            '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 1 - (scrollPos / 300) + ')'
        });

        if ($('.topText').css('opacity') == 0) {
            $('.topText').css('position', 'relative');
        } else {
            $('.topText').css('position', 'fixed');
        }
    };






    //-----------------slick----------------
    $('.skills').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //-----------------filterizr----------------
    // $('.works').filterizr();


    $('.filters_btns a').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');


        var tagName = $(this).data('filter'),
            $filterItem = $('.works .work')


        if (tagName == 'all') {
            $filterItem.addClass('is-animated').fadeIn();

        } else {

            $filterItem.removeClass('is-animated').fadeOut().promise().done(function() {

                $filterItem.filter('[data-category=' + tagName + ']').addClass('is-animated').fadeIn();


            });
        }


    });




    //-----------------ScrollReveal----------------
    // // Changing the defaults
    // window.sr = ScrollReveal({ duration: 1000 });
    // // reset: true,
    // // Customizing a reveal set
    // sr.reveal('.hgroup', { origin: 'left', distance: '400px' });
    // // sr.reveal('#Portfolio', { duration: 1000 });
    // sr.reveal('.duties span', { origin: 'top', distance: '50px', delay: 800 });
    // sr.reveal('.duties p', { origin: 'top', distance: '50px', delay: 1000 });
});
