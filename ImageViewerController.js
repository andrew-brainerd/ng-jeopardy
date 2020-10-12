var app = angular.module('gifViewer', []);

var ImageViewerController = function($scope) {
  $scope.message = 'Hello, World!'
};

app.controller('ImageViewerController', ImageViewerController);
