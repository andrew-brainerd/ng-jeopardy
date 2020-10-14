var baseUrl = 'http://jservice.io';

var jeopardy = function ($http, __env) {
  var getRandomQuestion = function () {
    return $http.get(baseUrl + '/api/random')
      .then(function (response) {
        return response.data[0];
      });
  };

  return {
    getRandomQuestion: getRandomQuestion
  };
};

angular
  .module('app')
  .factory('jeopardy', ['$http', '__env', jeopardy]);
