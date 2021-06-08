var env = {};

if (window) {
  Object.assign(env, window.__env);
}

var app = angular.module('app', ['ui.router', 'react']);

app.constant('__env', env);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html'
  });

  $stateProvider.state('viewer', {
    url: '/viewer',
    templateUrl: 'controllers/imageViewer/image-viewer.html',
    controller: 'ImageViewerController'
  });

  $stateProvider.state('jeopardy', {
    url: '/jeopardy',
    templateUrl: 'controllers/jeopardy/jeopardy.html',
    controller: 'JeopardyController'
  });

  $stateProvider.state('react', {
    url: '/react',
    templateUrl: 'controllers/react/react.html',
    controller: 'ReactController'
  });

  $stateProvider.state('notFound', {
    url: '/not-found',
    templateUrl: 'not-found.html'
  });

  $urlRouterProvider.otherwise('/');
});
