!(function($) {
  "use strict";
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }
        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }
        $('html, body').animate({
          scrollTop: 0
        }, 350);
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
})(jQuery);
var front=30,back=30;
var typed_tags = new Typed('.typer-items-tags', {
  strings: ['Programmer.','Web Developer.','Web Designer.','Frontend Developer.','Researcher.','Future Entrepreneur.','Future Billionaire.'],
  typeSpeed: 40,
  backSpeed:40,
  smartBackspace:true,
  loop:true,
  backDelay:3000
});
var typed_h1_tags = new Typed('.h1-typer', {
  strings: ['Ansh Sarkar.','@SeraphimCoder.'],
  typeSpeed: 40,
  backSpeed:40,
  smartBackspace:true,
  loop:true,
  backDelay:4000
});
var typed_h1_about = new Typed('.about-typer', {
  strings: ['Ansh Sarkar','@SeraphimCoder'],
  typeSpeed: 40,
  backSpeed:40,
  backDelay:3000,
  loop:true
});
var typed_h1_resume = new Typed('.resume-typer', {
  strings: ['Life.','Journey.','Resume.'],
  typeSpeed: 40,
  backSpeed:40,
  backDelay:3000,
  loop:true
});
$(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});
var typed_h1_contact = new Typed('.contact-typer', {
  strings: ['Contact','Call','E-Mail'],
  typeSpeed: 40,
  backSpeed:40,
  backDelay:3000,
  loop:true
});
var typed_certificate=new Typed('.certificates',{
  strings:['Certificates','Certifications','MOOCS'],
  typeSpeed:40,
  backSpeed:40,
  smartBackspace:true,
  backDelay:3000,
  loop:true
});
var service=new Typed('.service-typer',{
  strings:['Collaboration','Help','Advice'],
  typeSpeed:40,
  backSpeed:40,
  smartBackspace:true,
  backDelay:3000,
  loop:true
});
var footer=new Typed('.footer-typer',{
  strings:['Ansh Sarkar'],
  typeSpeed:40,
  //backSpeed:40,
  //smartBackspace:true,
  //backDelay:5000,
  //loop:true
});