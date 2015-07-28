'use strict';

(function() {

  angular.module('djinnApp')
    .controller('LoginController', ['$scope', '$state', 'LoginFactory',
    function($scope, $state, LoginFactory) {

      $scope.login = {
        send: function() {
          LoginFactory.login($scope.login.user, $scope.login.password)
          .then(function() {

            $state.go('main.choice');

          });
        }
      };

      $scope.main.initMain();

    }]);

})();