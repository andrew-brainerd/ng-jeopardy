var JeopardyController = function ($scope, jeopardy) {
  var onStatsSuccess = function (response) {
    $scope.question = response;
  };

  $scope.getNextQuestion = function () {
    jeopardy.getRandomQuestion().then(onStatsSuccess);
  };

  $scope.getNextQuestion();
};

angular
  .module('app')
  .controller('JeopardyController', ['$scope', 'jeopardy', JeopardyController]);