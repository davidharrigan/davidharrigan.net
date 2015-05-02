(function () {
  'use strict';

  var app = angular.module('dh.layout')

  app.directive('sideNav', SideNav);

  function SideNav() {
    return {
      controller: 'sideNavController',
      controllerAs: 'vm',
      restrict: 'E',
      templateUrl: '/static/partials/layout/sidenav.html'
    }
  }
})();
