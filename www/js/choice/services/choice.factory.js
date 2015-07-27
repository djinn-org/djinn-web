'use strict';

(function() {

  angular.module('djinnApp')
    .factory('ChoiceFactory', ['ChoiceValue',
    function(ChoiceValue) {

      var iconObj = {};

      var choice = {

        initIcons: function() {
          angular.forEach(ChoiceValue, function(item) {
            iconObj[item.model] = item.icon;
          });
        },

        getIcons: function() {
          return iconObj;
        }
      };

      return {
        initIcons:  choice.initIcons,
        getIcons:   choice.getIcons
      };

    }]);

})();