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
    .when('/projects', {
      templateUrl: '/static/partials/pages/projects.html',
      title: 'Projects'
    })
    .when('/contact', {
      templateUrl: '/static/partials/pages/contact.html',
      title: 'Contact'
    })
    .otherwise('/');
  }
})();
