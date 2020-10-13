var env = {};

if (window) {
  Object.assign(env, window.__env);
}

var app = angular.module('app', ['ui.router']);

app.constant('__env', env);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html'
  });

  $stateProvider.state('viewer', {
    url: '/viewer',
    templateUrl: 'image-viewer.html',
    controller: 'ImageViewerController'
  });

  $stateProvider.state('notFound', {
    url: '/not-found',
    templateUrl: 'not-found.html'
  });

  $urlRouterProvider.otherwise('/');
});
