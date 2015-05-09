(function () {
  'use strict';

  var app = angular.module('dh.layout')

  app.directive('navToggle', NavToggle);

  function NavToggle() {
    return {
      controller: 'navToggleController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {},
      template: [
        '<a class="sidenav-toggle-btn" ng-click="vm.toggle()">',
          '<i class="uk-icon-bars uk-icon-medium"></i>',
        '</a>',
      ].join('')
    }
  }
})();
