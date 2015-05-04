(function () {
  'use strict';

  var app = angular.module('dh.layout')

  app.directive('sideNav', SideNav);

  function SideNav() {
    return {
      controller: 'sideNavController',
      controllerAs: 'vm',
      scope: {},
      restrict: 'E',
      templateUrl: '/static/partials/layout/sidenav.html'
    }
  }
})();
