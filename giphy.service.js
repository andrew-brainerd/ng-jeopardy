var module = angular.module('imageViewer');

var GIPHY_API_KEY = 'xwSAEQEBFPJigSY8TAl4ZBCNk9fLB5vS';

var giphy = function($http) {
  var getRandomGif = function(tag) {
    return $http.get('https://api.giphy.com/v1/gifs/random?api_key=' + GIPHY_API_KEY + '&tag=' + tag);
  };

  return {
    getRandomGif: getRandomGif
  };
};

module.factory('giphy', ['$http', giphy]);
