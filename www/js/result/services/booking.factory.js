'use strict';

(function() {

  angular.module('djinnApp')
    .factory('BookingFactory', ['$http', '$q', 'ResultFactory',
    function($http, $q, ResultFactory) {

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
            }
          })
          .error(function(data, status) {
            defer.reject(status);
          });

          return defer.promise;
        }

      };

      return {
        bookIt: book.bookIt
      };
    }]);

})();