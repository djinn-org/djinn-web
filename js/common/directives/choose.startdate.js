'use strict';

(function() {

  angular.module('djinnApp')
    .directive('chooseStartdate', [function() {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/choose.startdate.html',
        scope: {
          choice: '='
        },
        link: function(scope) {

          var dayValue = 24 * 60 * 60 * 1000;

          scope.choice.value = new Date().getTime();

          scope.dt = {

            add: function() {
              scope.choice.value += dayValue;
            },

            remove: function() {
              if(scope.choice.value <= new Date().getTime()) {
                return;
              }
              scope.choice.value -= dayValue;
            }
          };
        }
      };

    }]);

})();