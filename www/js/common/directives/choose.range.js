'use strict';

(function() {

  angular.module('djinnApp')
    .directive('chooseRange', [function() {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/choose.range.html',
        scope: {
          choice: '='
        },
        link: function(scope) {

          scope.choice.value = scope.choice.value ? scope.choice.value : 0;

          scope.range = {

            add: function() {
              scope.choice.value++;
            },

            remove: function() {
              if(scope.choice.value <= 0) {
                return;
              }
              scope.choice.value--;
            }
          };

        }
      };

    }]);

})();