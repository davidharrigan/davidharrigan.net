(function () {
  'use strict';

  angular.module('dh.config')

  config.$inject = ['$locationProvider'];

  // Enable HTML5 routing
  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  }
})();
