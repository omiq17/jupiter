/*
  Author: Lumberjacks
  Template: Elegant (Landing Page)
  Version: 1.0
  URL: http://themeforest.net/user/Lumberjacks/
*/

(function($) {
  "use strict";

  $(document).ready(function (){
    'use strict';

    // setting default easing
    jQuery.easing.def = "easeInOutQuart";

    // mobile menu show / hide function
    $('.lj-menu-button a').on('click', function(){
      if($('.lj-menu-mobile.active').length) {
        clearTimeout(timeout);
        $('.lj-menu-mobile nav').fadeToggle();
        var timeout = setTimeout( function() {
          $('.lj-menu-mobile').delay(500).removeClass('active');
        }, 500); 
        
      }
      else {
        $('.lj-menu-mobile').addClass('active');
        $('.lj-menu-mobile nav').delay(500).fadeToggle();
      }
    });

    // scroll down in header animation
    var scrollLink = $('.lj-scroll-down button');
    var scrollIcon = $('.lj-scroll-down i');
    var scrollAnimation = 'animated infinite bounce';

    scrollLink.on('mouseover', function(){
      scrollIcon.addClass(scrollAnimation);
    });
    scrollLink.on('mouseleave', function(){
      scrollIcon.removeClass(scrollAnimation);
    });

    // bootstrap columns equal height recalculation
    $('.product-column').responsiveEqualHeightGrid();
    $('.about .col-sm-6').responsiveEqualHeightGrid();

    // projects gallery settings
    $(".lj-projects-gallery").owlCarousel({
      margin: 30,
      dots: true,
      responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        }
      }
    });

    // testimonials gallery settings
    $(".lj-testimonials-gallery").owlCarousel({
      margin: 30,
      dots: true,
      responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        768:{
            items:3
        }
      }
    });

    // clients gallery settings
    $(".lj-clients-gallery").owlCarousel({
      margin: 30,
      dots: true,
      responsive:{
        0:{
            items:3
        },
        400:{
            items:4
        },
        768:{
            items:5
        },
        1200:{
            items:6
        }
      }
    });

    // E-mail validation via regular expression
    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    };

    // Ajax mailchimp
    // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    /*
    $('#newsletter').ajaxChimp({
      language: 'lj',
      url: 'put_your_mailchimp_url_here'
    });
    */
    // Mailchimp translation
    //
    // Defaults:
    //'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'
    /*
    $.ajaxChimp.translations.lj = {
      'submit': 'Submitting...',
      0: '<i class="fa fa-check"></i> We will be in touch soon!',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    }*/

    // Subscription form notifications and AJAX function
    
    $(function () {
      $("#subscribe").on('submit', function (event) {
        var input = $('.lj-subscribe-message');
          if(!input.is(':empty')) {
            $('.lj-subscribe-message').stop(true);
          }
          event.preventDefault();
          event.stopImmediatePropagation();

          var email = $("input#subscribe-email").val();

          if (email == "") {

            $(".lj-subscribe-message").stop(true).html('<i class="fa fa-warning"></i> You must enter a valid e-mail address.');
            $("input#subscribe-email").focus();
          } 
          else if (!isValidEmailAddress( email )) {
            $(".lj-subscribe-message").stop(true).html('<i class="fa fa-warning"></i> E-mail address is not valid.');
            $("input#subscribe-email").focus();            
          }
          else {
            $.ajax({
              type: "POST",
              url: "./php/send-subscription.php",
              data: {subscription:email},
              success: function () {
                $(".lj-subscribe-message").html('<i class="fa fa-check"></i> We will be in touch soon!');
                $('input#subscribe-email').val('');
              }
            });
          }
       });
    });
  
    // Contact form functions
    $(function () {
      $("#contactform").on('submit', function (event) {
        var input = $('.lj-contact-message');
          if(!input.is(':empty')) {
            $('.lj-contact-message').stop(true);
          }
          event.preventDefault();
          event.stopImmediatePropagation();

          var name = $("input#contact-name").val();
          var email = $("input#contact-email").val();
          var message = $("textarea#contact-message").val();

          if (name == "" || email == "" || message == "") {

            $(".lj-contact-message").stop(true).html('<i class="fa fa-warning"></i> All fields are required.');
          }
          else if (!isValidEmailAddress( email )) {
            $(".lj-contact-message").stop(true).html('<i class="fa fa-warning"></i> E-mail address is not valid.');
            $("input#contact-email").focus();
          }
          else {
            $.ajax({
              type: "POST",
              url: "./php/send-contact.php",
              data: {contact_email:email,
                     contact_name:name,
                     contact_message:message},
              success: function () {
                $(".lj-contact-message").html('<i class="fa fa-check"></i> Thank you for your message!');
                $('input#contact-name').val('');
                $('input#contact-email').val('');
                $('textarea#contact-message').val('');
              }
            });
          }
       });
    });

    // Scroll to next module after Header section 
    $(".lj-scroll-down button").on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $("header").nextAll('.module').offset().top},
        1250);           
    });

    // Scroll to module after menu click 
    $("a.slide").on('click', function(e) {
      e.preventDefault();
      var $this = $(this).attr('href');
      $('html,body').animate({
        scrollTop: $("header").nextAll($this).offset().top},
        1250);
    });

    // statistics counter-up function
    $('.lj-milestone span').counterUp({
      delay: 10,
      time: 3000
    });

    // backstretch
    $("header").backstretch("img/bg.jpg");

    // jQuery Tweetie
    $(function () {
      $('.lj-twitter-feed').twittie({
        username: 'envato',
        count: 5,
        dateFormat: '%d %B %Y',
        template: '{{tweet}} <div class="lj-twitter-date"><a href="{{url}}" target="_blank">{{date}}</a> <span>@{{user_name}}</span></div>',
        apiPath: 'twitter/api/tweet.php',
      }, function () {
        var ticker = $('.lj-twitter-feed ul');
        ticker.children('li:first').show().siblings().hide();        
        setInterval(function() {
          ticker.find('li:visible').fadeOut(500,function() {
            $(this).appendTo(ticker);
            ticker.children('li:first').fadeIn(500);
          });
        },5000);
      });
    }); 

  });

  
  $(window).load(function() {
    
    // Preloader
    $(".lj-preloader").delay(100).fadeOut(500);
  
    // WOW js
    new WOW().init();

  });

})(jQuery);