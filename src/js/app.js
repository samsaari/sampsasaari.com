$(function() {

  var cache = {
    $mobileMenu: $('#mobile-menu'),
    $navbar: $('.navbar'),
    $nav: $('#nav'),
    $hamburger: $('.hamburger')

  };

  var app = {

    init: function() {
      app.navToggle();
    },

    navToggle: function() {
      cache.$mobileMenu.on('click', function() {

        cache.$nav.toggleClass('responsive');
        cache.$navbar.toggleClass('responsive');
        cache.$hamburger.toggleClass('is-active');

        return false;

      });
    }
  };

  app.init();

  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
