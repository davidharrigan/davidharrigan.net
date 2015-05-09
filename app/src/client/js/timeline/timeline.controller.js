(function() {
  'use strict';

  var timeline_json = [
    {
      "title": 'Born',
      "date": "Jan 1992",
      "icon": "uk-icon-user",
      "content": "I was born in Zushi Kanagawa Preficture, Japan. It is located  about 40 miles south of Tokyo.  I was born between a Japanese mother and an American father. Japanese is my native tounge, I did not speak any English at all until my big move to America in 6th grade"
    },
    {
      "title": 'Moved to USA',
      "date": "June 2003",
      "icon": "uk-icon-plane",
      "content": "This is probably the biggest and scariest event that has happened to me.  I did not speak the language and I'm sure you can imagine, America is nothing like Japan. It was a culture shock. First word I learned to spell was 'Pizza' - it's everywhere."
    },
    {
      "title": 'Graduated Kingswood Regional Highschool',
      "date": "May 2010",
      "icon": "uk-icon-graduation-cap",
      "content": "During my high school years, I indulged myself in hacking away my gadgets, playing baseball, and playing the saxophone and guitar.  I met some of my best friends during this time who I still hangout and talk to regularly."
    },
    {
      "title": 'Graduated University of New Hampshire',
      "date": "May 2014",
      "icon": "uk-icon-graduation-cap",
      "content": "I graduated from UNH with a B.S. in Computer Science.  My interest in Software Development bloomed during this time. I worked for 2.5 years as a web developer at UNH Earth Systems Research Center and chipped away regularly on my personal projects and research."
    },
    {
      "title": 'Professional Career Began at Dyn',
      "date": "July 2014",
      "icon": "uk-icon-briefcase",
      "content": "I received an offer from a reputable New Hampshire based company after my graduation.  It is an exciting place to be and we move fast.  I have learned a tremoundous amount from my coworkers and my skills are exponentioally growing"
    }
  ];

  jQuery(document).ready(function($) {
    function scroll() {
      var blocks = $('.timeline-block');

      // Hide elements
      blocks.each(function() {
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.timeline-icon, .timeline-content').removeClass('bounce-in').addClass('is-hidden');
        }

        else if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 &&
            $(this).find('.timeline-icon').hasClass('is-hidden') ) {
              $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
      });
    }

    $(window).on('scroll', function(){
      scroll();
    });

    scroll();
  });


  var app = angular.module('dh.timeline');
app.controller('timelineController', ['$scope', '$window', TimelineController]);

  function TimelineController($scope, $window) {
    var vm = this;
    vm.timelineContent = timeline_json;

    return vm;
  }
})();


