'use strict';

(function() {

  angular.module('djinnApp')
    .factory('UserFactory', [
    function() {

      var fact = {
        saveUser: function(user) {

        }
      };

      return {
        saveUser: fact.saveUser
      };
    }]);

})();