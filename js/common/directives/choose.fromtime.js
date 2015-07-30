'use strict';

(function() {

  angular.module('djinnApp')
    .directive('chooseFromtime', [function() {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/common/templates/choose.fromtime.html',
        scope: {
          choice: '='
        },
        link: function(scope) {

          var dir = {
            round: function(mn) {
              mn = Math.ceil(mn / scope.choice.step) * scope.choice.step;
              if (mn >= 60) {
                scope.choice.value.hh++;
                mn = 0;
              }
              return mn;
            }
          };

          scope.from = {
            hourChecked: false,

            toggle: function() {
              scope.from.hourChecked = !scope.from.hourChecked;
            },

            add: function() {
              if (scope.from.hourChecked) {
                if (scope.choice.value.hh >= 23) {
                  scope.choice.value.hh = 0;
                  return;
                }
                scope.choice.value.hh += 1;
              } else {
                if (scope.choice.value.mm >= 45) {
                  scope.choice.value.mm = 0;
                  return;
                }
                scope.choice.value.mm += scope.choice.step;
              }
            },

            remove: function() {
              if (scope.from.hourChecked) {
                if (scope.choice.value.hh <= 0) {
                  scope.choice.value.hh = 23;
                  return;
                }
                scope.choice.value.hh -= 1;
              } else {
                if (scope.choice.value.mm <= 0) {
                  scope.choice.value.mm = 45;
                  return;
                }
                scope.choice.value.mm -= scope.choice.step;
              }
            }

          };

          scope.choice.value = {
            hh: new Date().getHours()
          };
          scope.choice.value.mm = dir.round(new Date().getMinutes());

        }
      };

    }]);

})();