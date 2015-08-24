angular.module('admin', ['ui.router', 'ngResource','ui.bootstrap', 'ngFileUpload', 'textAngular', 'admin.controllers', 'admin.models'])

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

  .state('news.edit', {
    url: '/:id',
    views: {
      'main@': {
        templateUrl: 'templates/news.detail.html',
        controller: 'NewsEditCtrl'
      }
    }
  })


   .state('serve', {
    url: '/serve',
    views: {
      'main': {
        templateUrl: 'templates/serve.html',
        controller: 'ServeCtrl'
      }
    }
  })

  .state('serve.create', {
    url: '/create',
    views: {
      'main@': {
        templateUrl: 'templates/serve.detail.html',
        controller: 'ServeCreateCtrl'
      }
    }
  })

  .state('serve.edit', {
    url: '/:id',
    views: {
      'main@': {
        templateUrl: 'templates/serve.detail.html',
        controller: 'ServeEditCtrl'
      }
    }
  })


   .state('solution', {
    url: '/solution',
    views: {
      'main': {
        templateUrl: 'templates/solution.html',
        controller: 'SolutionCtrl'
      }
    }
  })

  .state('solution.create', {
    url: '/create',
    views: {
      'main@': {
        templateUrl: 'templates/solution.detail.html',
        controller: 'SolutionCreateCtrl'
      }
    }
  })

  .state('solution.edit', {
    url: '/:id',
    views: {
      'main@': {
        templateUrl: 'templates/solution.detail.html',
        controller: 'SolutionEditCtrl'
      }
    }
  })



  $urlRouterProvider.otherwise('/')
})