'use strict';

(function() {

  angular.module('djinnApp')
    .factory('LoginFactory', ['$http', '$q', 'UserFactory',
    function($http, $q, UserFactory) {

      var log = {
        login: function(user, password) {

          UserFactory.login();
          var defer = $q.defer();
          defer.resolve('');
/*          $http({
            url: 'api/login',
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              user: user,
              password: password
            }
          })
          .success(function(data, status) {
            if (status === 204) {

            } else {
              UserFactory.saveUser();
              defer.resolve('logged');
            }
          });
*/
          return defer.promise;
        }
      };

      return {
        login: log.login
      };
    }]);

})();