'use strict';

(function() {

  angular.module('djinnApp')
    .controller('MainController', ['$scope', '$state',
    function($scope, $state) {

      $scope.main = {
        goState: null,
        open: false,
        close: true,

        goHome: function() {
          if($scope.main.goState) {
            $state.go($scope.main.goState);
          }
        },

        logout: function() {
          $scope.main.close = true;
          $scope.main.open  = false;
          $state.go('main.login');
        }
      };

    }]);

})();