'use strict';

(function() {

  angular.module('djinnApp')
    .factory('ResultFactory', ['$http', '$q',
    function($http, $q) {

      var currentSearch = {};

      var res = {

        setSearch: function(params) {
          currentSearch = params;
        },

        getRooms: function() {
          var defer = $q.defer();

          $http({
            method:   'GET',
            url:      'js/mocks/result.json',
            data:     currentSearch
          }).success(function(data) {

            defer.resolve(data.rows);

          });

          return defer.promise;
        }
      };

      return {
        setSearch:    res.setSearch,
        getRooms:     res.getRooms
      };

    }]);

})();
