'use strict';

(function() {

  angular.module('djinnApp')
    .filter('timenumber', [function() {

      return function(parm) {

        return parm < 10 ? '0' + parm : parm;

      };

    }]);

})();