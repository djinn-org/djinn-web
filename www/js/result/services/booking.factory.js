'use strict';

(function() {

  angular.module('djinnApp')
    .factory('BookingFactory', ['$http', '$q',
    function($http, $q) {

      var book = {

        bookIt: function(data) {

          var defer = $q.defer();

          $http.post('/bookit/url', data)
            .success(function() {
              defer.resolve('ok');
            });

          return defer.promise;
        }

      };

      return {
        bookIt: book.bookIt
      };
    }]);

})();