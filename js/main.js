$(function() {


    /** Banner Parallax */
  $(window).scroll(function() {
        scrollBanner();
    });

 /** Parallax Banner Function  */
    var scrollBanner = function() {        
       /** Get the scroll position of the page */
        scrollPos = $(this).scrollTop();

        /** Scroll and fade out the banner text */
        $('.topText').css({
            'opacity' : 1 - ( scrollPos / 250 ),
            '-ms-filter' : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 1 - ( scrollPos / 300 ) + ')'
        });

        if($('.topText').css('opacity') ==0){
        		$('.topText').css('position','relative');
        }
        	else{
	$('.topText').css('position','fixed');
        	}

     
    };

$('.filters a').on('click',function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');


});

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
    },
    {
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
$('.works').filterizr();

//-----------------ScrollReveal----------------
// Changing the defaults
window.sr = ScrollReveal({ reset: true, duration: 1000  });
// Customizing a reveal set
sr.reveal('.hgroup', { origin: 'left',distance: '400px'});
// sr.reveal('.timeline', { duration: 1000 });
sr.reveal('.duties', { origin: 'top',distance: '50px' ,delay: 800});

});
