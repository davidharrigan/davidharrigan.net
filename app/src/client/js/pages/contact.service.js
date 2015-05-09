(function () {
  'use strict';

  var app = angular.module('dh.pages');
  app.factory('contactService', ['$http', '$q','$window',  ContactService]);

  function ContactService($http, $q, $window) {
    var deferred = $q.defer();
    var promise = deferred.promise;
    var recaptcha;
    var messageSuccessfullySent = false;

    // Captcha callback
    $window.onloadCallback = function() {
      recaptcha = $window.grecaptcha;
      deferred.resolve(recaptcha);
    };

    /**
     * Send contact data to the back-end
     */
    function post(contactData) {
      if (messageSuccessfullySent) return;

      function postSuccess(response) {
        messageSuccessfullySent = true;
        return $q.when(response);
      }

      function postError(response) {
        return $q.reject(response);
      }

      return $http.post('/contact/', contactData).then(postSuccess, postError);
    }

    /**
     * Returns a promise for when recaptcha is loaded
     */
    function getRecaptcha() {
      if (!!recaptcha) {
        return $q.when(recaptcha);
      }
      return promise;
    }

    function isMessageSent() {
      return messageSuccessfullySent;
    }

    var contactService = {
      post: post,
      recaptcha: recaptcha,
      getRecaptcha: getRecaptcha,
      isMessageSent: isMessageSent
    }

    return contactService;
  };
})();
