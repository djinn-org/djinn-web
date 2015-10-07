'use strict';

(function() {

  angular.module('djinnApp')
    .factory('HttpErrorFactory', ['$rootScope', '$q',
    function($rootScope, $q) {

      return {
        responseError: function(resp) {
          var parms = {
            method:   resp.config.method,
            status:   resp.status === 0 ? '' : resp.status,
            message:  resp.status === 0 ? 'Internal Error' : resp.statusText,
            url:      resp.config.url,
            more:     resp.data
          };
          $rootScope.$emit('openModale', parms);

          return $q.reject(resp.status);
        }
      };

    }]);

})();