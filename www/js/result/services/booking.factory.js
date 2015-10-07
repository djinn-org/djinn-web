'use strict';

(function() {

  angular.module('djinnApp')
    .factory('BookingFactory', ['$http', '$q', '$rootScope','ResultFactory',
    function($http, $q, $rootScope, ResultFactory) {

      var book = {

        bookIt: function(data) {

          var defer   = $q.defer();
          var search  = ResultFactory.getCurrentSearch();

          $http.post('/api/v1/reservations/', {
            start:    search.startdate,
            minutes:  search.duration,
            id:       data.room.id,
            room:     data.room.id,
            user:     null
          })
          .success(function(data, status) {
            if (status === 201) {
              defer.resolve('ok');
            } else {
              $rootScope.$emit('openModale', {
                status: status,
                message: data
              });
              defer.reject('ko');
            }
          });

          return defer.promise;
        }

      };

      return {
        bookIt: book.bookIt
      };
    }]);

})();