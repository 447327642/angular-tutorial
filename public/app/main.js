var app = angular.module('myApp',['ui.router', 'ngMessages', 'ui.bootstrap', 'HomeService', 'UserService']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/index.jade'
    })
    .state('lobby', {
    	url: '/lobby',
    	templateUrl: 'partials/lobby.jade'
    });
});
