$(document).ready(function() {


  /* Sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  /* Scroll on buttons */

  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });


  /* navigation scroll */

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });


  /* animations on scroll */

  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '70%'
  })

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '60%'
  })

  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '60%'
  })

  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  })


  /*mobile nav*/

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });


  /* Maps */

  var map = new GMaps({
    div: '.map',
    lat: 38.7436266,
    lng: -9.08,
    zoom: 12
  });

  map.addMarker({
  lat: 38.743626,
  lng: -9.160203,
  title: 'Omnifood Lisbon',
  infoWindow: {
    content: '<p>Our Lisbon HQ</p>'
  }
});


});
