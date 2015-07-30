'use strict';

(function() {

  angular.module('djinnApp')
    .controller('ResultController', ['$scope', 'ResultData', 'ChoiceFactory',
    function($scope, ResultData, ChoiceFactory) {

      // logo menu link
      $scope.main.goState = 'main.choice';

      $scope.result = {
        rows: ResultData,
        icons: ChoiceFactory.getIcons()
      };

    }]);

})();