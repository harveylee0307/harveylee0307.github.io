$(function() {

    //-----------------ScrollReveal----------------
    // Changing the defaults
    window.sr = ScrollReveal({ reset: true, duration: 800 });
    // reset: true,

    // Customizing a reveal set
    sr.reveal('.avatar-section', { delay: 500 });
    sr.reveal('.talkbubble ', { delay: 1000 });
    sr.reveal('code', { origin: 'top', delay: 1500 });

    sr.reveal('.hgroup', { origin: 'left', distance: '100px', delay: 500, });
    sr.reveal('.duties', { origin: 'top', distance: '50px', delay: 1000 });

    sr.reveal('.workItem', { delay: 500 });
    sr.reveal('#contactForm', { mobile: false, origin: 'right', distance: '100px', delay: 1000, duration: 1000 });
});
