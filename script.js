$(document).ready(function() {
    $('.carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
    });
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true //animation repeat
})

sr.reveal('.nav, .services-top, .product-box, .contact-overlay')
sr.reveal('.product-box', {interval: 100})
sr.reveal('.left-wrapper-title, .left-wrapper-desc, .left-wrapper-desc-last, .appointment-button, .about-us-right, .services-bottom-right', {origin:'right'})
sr.reveal('.overlay1-part2, .overlay1-part1, .contact-form, .footer', {origin:'bottom'})
sr.reveal('.about-us-left, .services-bottom-left', {origin:'left'})
// sr.reveal('.home__data, .list__container, .join__content, .footer__container')
// sr.reveal('.home__img', {origin:'bottom'})
// sr.reveal('.health__image, .routine__images, .follow__img-3', {origin:'left'})
// sr.reveal('.health__data, .routine__data, .follow__img-4', {origin:'right'})
// sr.reveal('.follow__data, .follow__content-1 img', {interval: 100})