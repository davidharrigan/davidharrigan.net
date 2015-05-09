(function () {
  'use strict';

  var app = angular.module('dh.pages');
  app.controller('contactController', ['$scope', '$window', 'contactService', ContactController]);

  function ContactController($scope, $window, contactService) {
    var vm = this;

    vm.isMessageSent = contactService.isMessageSent;

    vm.submit = function() {
      function successFn() { }
      function errorFn(response) {
        vm.formError = response;
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

    // Render recaptcha on route change success
    $scope.$on('$routeChangeSuccess', function(event, current) {
      contactService.getRecaptcha().then(function(recaptcha) {
        var el = document.querySelector("#g-recaptcha");
        recaptcha.render(
          el, {
            'sitekey' : '6LdJQwYTAAAAAPIuis7N0k44YY_awgp-HpAN6scw'
          });
      });
    });

    return vm;
  }
})();
