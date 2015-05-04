(function () {
  'use strict';

  var app = angular.module('dh.layout');

  app.directive('header', Header);

  function Header() {
    return {
      controller: 'headerController',
      controllerAs: 'vm',
      restrict: 'E',
      templateUrl: '/static/partials/layout/header.html'
    }
  }
})();
