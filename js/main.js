$(function() {



    $(window).load(function() {
       var c = 0;
        var timer = setInterval(function() {
        $('body').css('overflow','hidden');
        c++;
        $('.prg').text(c + '%');
        if (c > 99) {
            clearInterval(timer);
            $('#loader').fadeOut(500);
             $('body').css('overflow','visible');
        }
    }, 40);
    });

    var lastScrollVal = 0
    $(window).scroll(function(e) {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > lastScrollVal) {
            $('header').addClass('scrollUp');
            $('nav').removeClass('show');
            $('.menu_icon').addClass('icon-bars').removeClass('icon-close');
        } else {
            $('header').removeClass('scrollUp');
        }
        lastScrollVal = scrollVal;
    });

    $('.menu_icon').on('click', function() {
        $('nav').toggleClass('show');
        $(this).toggleClass('active').toggleClass('icon-bars').toggleClass('icon-close');
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


    //-----------------validate----------------


    $("#contactForm").validate({

        submitHandler: function(form) {
            //驗證成功之後就會進到這邊：
            //方法一：直接把表單 POST 或 GET 到你的 Action URL
            //方法二：讀取某些欄位的資料，ajax 給別的 API。
            //此處測試方法一的寫法如下：
            // form.submit();
            alert('感謝！已接收您的訊息！');
            sendMessage();
        },
        rules: {
            //你可以加上特殊的規則
            //格式為  name:{規則名稱: true}，
            //下方舉例的是 name == password 的 input 需要通過名為 hasUppercase 的規則驗證
            //更簡單的作法是直接把 hasUppercase 的 class 加在該 input 的 html 上。
            //password: {
            //     hasUppercase: true
            //}
            fName: 'required',
            fMessage: 'required',
            fPhone: 'digits',
            fEmail: 'email'
        },
        messages: {
            fPhone: { digits: '本欄位請輸入數字' },
            fEmail: { email: '請輸入正確的 Email 格式' },
            fName: '必填 讓我知道您是誰',
            fMessage: '必填 讓我知道您想告訴我什麼',
        }

    });

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA9R7_rAB5_80KUqwz7orDF_QDkO2CAVhU",
        authDomain: "harvey-website.firebaseapp.com",
        databaseURL: "https://harvey-website.firebaseio.com",
        projectId: "harvey-website",
        storageBucket: "harvey-website.appspot.com",
        messagingSenderId: "1048068322106"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    var fType = $('select[name=messageType]');
    var fName = $('input[name=fName]');
    var fEmail = $('input[name=fEmail]');
    var fPhone = $('input[name=fPhone]');
    var fMessage = $('textarea[name=fMessage]');

    function sendMessage() {
        var ref = database.ref('contact');
        var data = {
            type: fType.val(),
            name: fName.val(),
            email: fEmail.val(),
            phone: fPhone.val(),
            content: fMessage.val()
        }
        ref.push(data);
        $('#contactForm').find('input[type=text],textarea').val('');
    }

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




});
