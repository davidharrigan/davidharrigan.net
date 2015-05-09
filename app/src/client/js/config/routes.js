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
      title: 'home'
    })
    .when('/about', {
      templateUrl: '/static/partials/pages/about.html',
      title: 'about'
    })
    .when('/projects', {
      templateUrl: '/static/partials/pages/projects.html',
      title: 'projects'
    })
    .when('/contact', {
      templateUrl: '/static/partials/pages/contact.html',
      title: 'contact'
    })
    .otherwise('/');
  }
})();
