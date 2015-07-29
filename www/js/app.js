'use strict';

(function() {

  angular.module('djinnApp', [
    'ui.router',
    'pascalprecht.translate',
    'ngSanitize',
    'tmh.dynamicLocale'
  ])

  .config(['$locationProvider', '$compileProvider', 'tmhDynamicLocaleProvider',
  function($locationProvider, $compileProvider, tmhDynamicLocaleProvider) {

    $locationProvider.html5Mode(false);
    $compileProvider.debugInfoEnabled(false);

    tmhDynamicLocaleProvider.localeLocationPattern('i18n/angular-locale_{{locale}}.js');
  }])

  .run(['LocaleFactory',
  function(LocaleFactory) {

    LocaleFactory.setLang();

  }]);

})();