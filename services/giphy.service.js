var giphy = function ($http, __env) {
  var getRandomGif = function (tag) {
    return $http.get('https://api.giphy.com/v1/gifs/random?api_key=' + __env.GIPHY_API_KEY + '&tag=' + tag);
  };

  return {
    getRandomGif: getRandomGif
  };
};

angular
  .module('app')
  .factory('giphy', ['$http', '__env', giphy]);
