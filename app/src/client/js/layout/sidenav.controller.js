(function () {
  'use strict';

  var app = angular.module('dh.layout');

  app.controller('sideNavController', ['$rootScope', SideNavController]);

  function SideNavController($rootScope) {
    var vm = this;

    vm.toggle = function() {
      $rootScope.$broadcast('sidenav-toggle');
    };
  }
})();
