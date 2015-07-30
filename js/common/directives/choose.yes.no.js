'use strict';

(function() {

  angular.module('djinnApp')
    .directive('chooseYesNo', [function() {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/choose.yes.no.html',
        scope: {
          choice: '='
        }
      };

    }]);

})();