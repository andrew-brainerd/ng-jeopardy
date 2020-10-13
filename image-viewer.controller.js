var app = angular.module('app');

var ImageViewerController = function($scope, giphy, $interval) {
  $scope.tag = 'turtle';

  var onRequestSuccess = function(response) {
    $scope.imageSrc = response.data.data.images.original.url;
    $scope.imageTitle = response.data.data.title;
  };

  var onRequestError = function(error) {
    console.error(error);
  };

  var getRandomGif = function() {
    giphy.getRandomGif($scope.tag).then(onRequestSuccess, onRequestError);
  };

  $scope.randomize = getRandomGif;

  getRandomGif();
  $interval(getRandomGif, 10000);
};

app.controller('ImageViewerController', ['$scope', 'giphy', '$interval', ImageViewerController]);
