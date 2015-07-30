'use strict';

(function() {

  angular.module('djinnApp')
    .directive('chooseDuration', [function() {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/choose.duration.html',
        scope: {
          choice: '='
        },
        link: function(scope) {

          function computeTime() {

            scope.duration.hh = Math.floor( scope.choice.value / 60);

            scope.duration.mm =
              scope.choice.value  - (scope.duration.hh * 60);
          }

          scope.duration = {

            add: function() {
              scope.choice.value += scope.choice.step;
              computeTime();
            },

            remove: function() {
              if (scope.choice.value <= scope.choice.step) {
                return;
              }
              scope.choice.value -= scope.choice.step;
              computeTime();
            }

          };

          scope.choice.value = scope.choice.value ?
            scope.choice.value : scope.choice.step;
          computeTime();

        }
      };

    }]);

})();