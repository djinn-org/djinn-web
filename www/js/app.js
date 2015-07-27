'use strict';

(function() {

  angular.module('djinnApp', [
    'ui.router',
    'pascalprecht.translate',
    'ngSanitize'
  ])

  .config(['$locationProvider', '$compileProvider',
  function($locationProvider, $compileProvider) {

    $locationProvider.html5Mode(false);
    $compileProvider.debugInfoEnabled(false);

  }])

  .run([
  function() {

  }]);

})();