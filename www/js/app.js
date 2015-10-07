'use strict';

(function() {

  angular.module('djinnApp', [
    'ui.router',
    'pascalprecht.translate',
    'ngSanitize',
    'tmh.dynamicLocale',
    'ngTouch'
  ])

  .config(['$locationProvider', '$compileProvider', '$httpProvider', 'tmhDynamicLocaleProvider',
  function($locationProvider, $compileProvider, $httpProvider, tmhDynamicLocaleProvider) {

    $locationProvider.html5Mode(false);
    $compileProvider.debugInfoEnabled(false);

    tmhDynamicLocaleProvider.localeLocationPattern('i18n/angular-locale_{{locale}}.js');

    // interceptors
    $httpProvider.interceptors.push('ApiFactory');
    $httpProvider.interceptors.push('HttpErrorFactory');

  }])

  .run(['$rootScope', 'LocaleFactory', 'UserFactory',
  function($rootScope, LocaleFactory, UserFactory) {

    LocaleFactory.setLang();

    $rootScope.$on('$stateChangeStart', UserFactory.isLogged);

  }]);

})();