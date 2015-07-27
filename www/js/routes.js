'use strict';

(function() {

  angular.module('djinnApp')
  .config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('main', {
        abstract: true,
        controller: 'MainController',
        templateUrl: 'js/main/templates/main.html'
      })

        .state('main.login', {
          url: '/login',
          controller: 'LoginController',
          templateUrl: 'js/login/templates/login.html'
        })

        .state('main.choice', {
          url: '/choice',
          controller: 'ChoiceController',
          templateUrl: 'js/choice/templates/choice.html'
        })

        .state('main.result', {
          url: '/result',
          controller: 'ResultController',
          templateUrl: 'js/result/templates/result.html',
          resolve: {
            ResultData: ['ResultFactory', function(ResultFactory) {
              return ResultFactory.getRooms();
            }]
          }
        })
    ;

    $urlRouterProvider.otherwise('/login');

  }]);

})();