var Timeline = (function(div, timelineBlocks) {
  var blockTemplate = [
    '<div class="timeline-block">',
      '<h2 id="title"></h2>',
      '<span id="year"></span>',
      '<span id="month"></span>',
    '</div>'
  ].join('');

  for (block in timelineBlocks) {
    
  }

  function add(timelineBlock) {
    
  }
});

(function() {
  'use strict';

  var timeline_json = [
    {
      "event": 'Born',
      "place": 'Japan',
      "year": 1992,
      "month": 'January',
    }
  ];

  var app = angular.module('dh.timeline');

  app.controller('timelineController', ['$scope', TimelineController]);

  function TimelineController($scope) {
    var vm = this;

    return vm;
  }
})();
