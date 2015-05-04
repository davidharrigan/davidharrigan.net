(function () {
  'use strict';

  var app = angular.module('dh.layout');
  app.factory('contactService', ['$http', '$q', ContactService]);

  function ContactService($http, $q) {
    var contactService = {
      post: post
    }

    /**
     * Send contact data to the back-end
     */
    function post(contactData) {

      function postSuccess(response) {
        return $q.when(response);
      }

      function postError(response) {
        return $q.reject(response);
      }

      return $http.post('/contact/', contactData).then(postSuccess, postError);
    }

    return contactService;
  };
})();
