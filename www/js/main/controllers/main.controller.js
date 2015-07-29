'use strict';

(function() {

  angular.module('djinnApp')
    .controller('MainController', ['$scope', '$state', 'LanguagesValue', 'LocaleFactory',
    function($scope, $state, LanguagesValue, LocaleFactory) {

      $scope.main = {
        goState: null,
        open: false,
        close: true,

        languages:    LanguagesValue,
        selectedLang: LocaleFactory.getPrefLang(),
        setPrefLang:  function(lang) {
          LocaleFactory.setPrefLang(lang);
          $scope.main.selectedLang = lang;
        },

        goHome: function() {
          if($scope.main.goState) {
            $state.go($scope.main.goState);
          }
        },

        logout: function() {
          $state.go('main.login');
        },

        initMain: function() {
          $scope.main.goState   = null;
          $scope.main.close     = true;
          $scope.main.open      = false;
        }
      };

    }]);

})();