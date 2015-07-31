'use strict';

(function() {

  angular.module('djinnApp')
    .controller('ResultController', ['$scope', 'ResultData', 'ChoiceFactory', 'BookingFactory',
    function($scope, ResultData, ChoiceFactory, BookingFactory) {

      // logo menu link
      $scope.main.goState = 'main.choice';

      $scope.result = {
        rows: ResultData,
        icons: ChoiceFactory.getIcons(),

        open: function(idx) {

          $scope.result.rows[idx].opened = !$scope.result.rows[idx].opened;

        },

        book: function(idx) {

          BookingFactory.bookIt($scope.result.rows[idx]).then(function() {

            // success

          });

        }
      };

    }]);

})();