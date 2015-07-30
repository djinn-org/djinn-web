'use strict';

(function() {

  angular.module('djinnApp')
  .config(['$translateProvider', 'LangEn', 'LangFr',
  function($translateProvider, LangEn, LangFr) {

    $translateProvider.translations('en', LangEn);
    $translateProvider.translations('fr', LangFr);

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }]);

})();