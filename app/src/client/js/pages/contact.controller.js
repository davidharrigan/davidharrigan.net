(function () {
  'use strict';

  var app = angular.module('dh.pages');
  app.controller('contactController', ['$scope', '$window', 'contactService', ContactController]);

  function ContactController($scope, $window, contactService) {
    var vm = this;

    vm.submit = function() {
      function successFn() {

      }
      function errorFn() {

      }

      var grecaptchaResponse = $window.grecaptcha.getResponse();
      vm.captchaError = undefined;

      if (!grecaptchaResponse) {
        vm.captchaError = "Captcha is Required";
        return;
      }

      var payload = {
        first_name: vm.firstName,
        last_name: vm.lastName,
        email: vm.email,
        content: vm.content,
        recaptcha_response: grecaptchaResponse
      }

      contactService.post(payload).then(successFn, errorFn);
    };

    var onloadCallback = function() {
      window.grecaptcha.render(
          'g-recaptcha', {
            'sitekey' : '6LdJQwYTAAAAAPIuis7N0k44YY_awgp-HpAN6scw'
      });
    };
    var l = onloadCallback();
    console.log(l);

    return vm;
  }
})();
