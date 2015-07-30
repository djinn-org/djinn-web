'use strict';

(function() {

  angular.module('djinnApp')
    .factory('LocaleFactory', ['$window', '$translate', 'LanguagesValue', 'tmhDynamicLocale',
    function($window, $translate, LanguagesValue, tmhDynamicLocale) {

      var key = 'prefLang';
      var loc = {

        setLang: function() {
          var userPref = loc.getPrefLang();
          tmhDynamicLocale.set(userPref);
          $translate.use(userPref);
        },

        getPrefLang: function() {
          return $window.localStorage.getItem(key) || LanguagesValue[0];
        },

        setPrefLang: function(lang) {
          $window.localStorage.setItem(key, lang);
          loc.setLang();
        }
      };

      return {
        setLang:          loc.setLang,
        getPrefLang:      loc.getPrefLang,
        setPrefLang:      loc.setPrefLang
      };

    }]);

})();