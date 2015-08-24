angular.module('admin', ['ui.router', 'ui.bootstrap', 'ngFileUpload', 'textAngular', 'admin.controllers', 'admin.models'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
    url: '/',
    views: {}
  })

  .state('news', {
    url: '/news',
    views: {
      'main': {
        templateUrl: 'templates/news.html',
        controller: 'NewsCtrl'
      }
    }
  })

  .state('news.create', {
    url: '/create',
    views: {
      'main@': {
        templateUrl: 'templates/news.detail.html',
        controller: 'NewsCreateCtrl'
      }
    }
  })

  .state('news.detail', {
    url: '/:id',
    views: {
      'main@': {
        templateUrl: 'templates/news.detail.html',
        controller: 'NewsDetailCtrl'
      }
    }
  })



  $urlRouterProvider.otherwise('/')
})