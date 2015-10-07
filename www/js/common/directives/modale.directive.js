'use strict';

(function() {

  angular.module('djinnApp')
    .directive('djinnModale', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/djinn.modale.html',
        scope: {

        },
        link: function(scope, elem) {

          var dir = {
            manageMessage: function(evt, data) {
              scope.dir = {
                message:  data.message,
                status:   data.status,
                url:      data.url,
                more:     dir.formatMore(data.more)
              };

              dir.showIt();
            },

            formatMore(datamore) {
              if (!angular.isObject(datamore)) {
                return null;
              }

              var more = [], formatted;
              angular.forEach(datamore, function(value, key) {
                formatted = key === 'non_field_errors' ? value[0] :
                            value[0] + ' (' + key + ')';
                more.push(formatted);
              });

              return more;
            },

            showIt: function() {
              elem.css({display: 'block'});
              $timeout(function() {
                elem.css({opacity: 1});
              }, 30);
            },

            hideIt: function() {
              elem.css({opacity: 0});
              $timeout(function() {
                elem.css({display: 'none'});
              }, 220);
            }
          };

          scope.action = {
            close: dir.hideIt
          };

          var unbindError = $rootScope.$on('openModale', dir.manageMessage);
          scope.$on('$destroy', function() {
            unbindError();
          });
        }
      };

    }]);

})();