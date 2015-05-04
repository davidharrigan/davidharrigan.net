(function () {
  'use strict';

  var app = angular.module('dh.timeline');

  app.directive('timeline', Timeline);

  function Timeline() {
    return {
      controller: 'timelineController',
      controllerAs: 'vm',
      restrict: 'E',
      templateUrl: '/static/partials/timeline/timeline.html'
    }
  }
})();
