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

          scope.choice.value = 0;

        }
      };

    }]);

})();