$(function() {

    //-----------------ScrollReveal----------------
    // Changing the defaults
    window.sr = ScrollReveal({duration: 800 });
    // reset: true,

    // Customizing a reveal set
    sr.reveal('.avatar-section', { delay: 500 });
    sr.reveal('.talkbubble ', { delay: 500 });
    sr.reveal('code', { origin: 'top', delay: 800 });

    sr.reveal('.hgroup', { origin: 'left', distance: '100px', delay: 500, });
    sr.reveal('.duties', { origin: 'top', distance: '50px', delay: 500 });

    sr.reveal('.workItem', { delay: 300 });
    sr.reveal('#contactForm', { mobile: false, origin: 'right', distance: '100px', delay:800, duration: 1000 });
});
