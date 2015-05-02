(function () {
  'use strict';

  angular
    .module('dh.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/static/partials/pages/home.html',
      title: 'Home'
    })
    .when('/about', {
      templateUrl: '/static/partials/pages/about.html',
      title: 'About'
    })
    .otherwise('/');
  }
})();
