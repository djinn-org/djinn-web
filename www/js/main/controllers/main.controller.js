'use strict';

(function() {

  angular.module('djinnApp')
    .controller('MainController', ['$scope', '$state',
    function($scope, $state) {

      $scope.main = {
        goState: null,

        goHome: function() {
          if($scope.main.goState) {
            $state.go($scope.main.goState);
          }
        }
      };

    }]);

})();