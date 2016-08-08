$(function() {

  var cache = {
    $mobileMenu: $('#mobile-menu'),
    $navbar: $('.navbar'),
    $nav: $('#nav'),
    $hamburger: $('.hamburger'),
    $htmlBody: $('html, body'),
    $a: $('a[href*="#"]:not([href="#"])')
  };

  var app = {

    init: function() {
      app.navToggle();
      app.navScroll();
    },

    navToggle: function() {
      cache.$mobileMenu.on('click', function() {

        cache.$nav.toggleClass('responsive');
        cache.$navbar.toggleClass('responsive');
        cache.$hamburger.toggleClass('is-active');

        return false;

      });
    },

    navScroll: function() {
      cache.$a.click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            cache.$htmlBody.animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }
  };
  app.init();
});
