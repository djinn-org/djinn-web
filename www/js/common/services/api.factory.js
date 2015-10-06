'use strict';

(function() {

  angular.module('djinnApp')
    .factory('ApiFactory', ['BaseUrl',
    function(BaseUrl) {

      return {
        request: function (config) {
          config.url = config.url.substr(0, 5) === '/api/' ?
                       BaseUrl + config.url : config.url;
          return config;
        }
      };

    }]);

})();