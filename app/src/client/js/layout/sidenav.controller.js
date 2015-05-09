(function () {
  'use strict';

  var app = angular.module('dh.layout');

  app.controller('sideNavController', ['$rootScope', '$location', SideNavController]);

  function SideNavController($rootScope, $location) {
    var vm = this;

    vm.isActive = function(pageRoute) {
      return $location.path() === pageRoute;
    };

    vm.toggle = function() {
      $rootScope.$broadcast('sidenav-toggle');
    };
  }
})();
