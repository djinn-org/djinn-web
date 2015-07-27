'use strict';

(function() {

  angular.module('djinnApp')
    .directive('chooseTime', [function() {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/choose.time.html',
        scope: {
          choice: '='
        },
        link: function() {

        }
      };

    }]);

})();