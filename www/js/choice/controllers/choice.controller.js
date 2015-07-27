'use strict';

(function() {

  angular.module('djinnApp')
    .controller('ChoiceController', ['$scope', '$state', 'ChoiceValue', 'ResultFactory', 'ChoiceFactory',
    function($scope, $state, ChoiceValue, ResultFactory, ChoiceFactory) {

      // logo menu link
      $scope.main.goState = 'main.login';

      $scope.choice = {
        items: ChoiceValue,

        send: function() {
          ResultFactory.setSearch($scope.choice.items);
          $state.go('main.result');
        }
      };

      ChoiceFactory.initIcons();

    }]);

})();