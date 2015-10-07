'use strict';

(function() {

  angular.module('djinnApp')
    .factory('UserFactory', ['$state',
    function($state) {

      var user = null;

      var fac = {
        login: function() {
          user = true;
        },

        isLogged: function(evt, toState) {
          if (!user && toState.name !== 'main.login') {
            evt.preventDefault();
            $state.go('main.login');
          }
        }
      };

      return {
        isLogged: fac.isLogged,
        login:    fac.login
      };

    }]);
})();