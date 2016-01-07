(function () {
  'use strict';

  angular
    .module('dh', [
      'dh.config',
      'dh.routes',

      'dh.layout',
      'dh.pages',
      'dh.timeline'
    ]);

  angular
    .module('dh.config', []);

  angular
    .module('dh.routes', ['ngRoute']);

  angular.module('dh.timeline', []);
  angular.module('dh.layout', []);
  angular.module('dh.pages', []);

})();
