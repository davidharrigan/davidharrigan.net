(function () {
  'use strict';

  var app = angular.module('dh.layout');
  app.controller('headerController', ['$scope', '$route', Header]);

  function Header($scope, $route) {
    var vm = this;
    vm.title = $route.current.$$route.title;

    // Change title on page loads
    $scope.$on('$routeChangeSuccess', function(event, current) {
      vm.title = current.$$route.title;
    });

    return vm;
  }
})();
