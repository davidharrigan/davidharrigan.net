(function () {
  'use strict';

  var app = angular.module('dh.layout');
  app.controller('navToggleController', ['$scope', NavToggle]);

  function NavToggle($scope) {
    var vm = this;

    vm.toggle = function() {
      var contentWrapper = document.querySelector('.content-wrapper');

      angular.element(document.querySelector('.main-wrapper')).toggleClass('sidenav-is-visible');
      angular.element(document.querySelector('.sidenav-wrapper')).toggleClass('sidenav-is-visible');
      angular.element(document.querySelector('.sidenav')).toggleClass('sidenav-is-visible');
      angular.element(document.querySelector('.sidenav-toggle-btn')).toggleClass('sidenav-is-visible');

      angular.element(document.querySelector('.content-wrapper')).toggleClass('sidenav-is-visible');
      angular.element(document.querySelector('.content')).toggleClass('sidenav-is-visible');
    };

    $scope.$on('sidenav-toggle', function() {
      vm.toggle();
    });

    return vm;
  }
})();
