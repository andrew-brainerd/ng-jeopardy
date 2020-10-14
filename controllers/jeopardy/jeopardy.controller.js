var JeopardyController = function ($scope, jeopardy) {
  var onStatsSuccess = function (response) {
    console.log('Question:', response);
  }

  jeopardy.getRandomQuestion().then(onStatsSuccess);
};

angular
  .module('app')
  .controller('JeopardyController', ['$scope', 'jeopardy', JeopardyController]);