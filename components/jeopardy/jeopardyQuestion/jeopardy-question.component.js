(function () {
  function JeopardyQuestionController($scope) {
    var $ctrl = this;

    $scope.answer = null;

    $scope.showAnswer = function () {
      $scope.answer = $ctrl.answer;
    };

    $scope.nextQuestion = function () {
      $scope.answer = null;
      $ctrl.getNextQuestion();
    };
  };

  angular
    .module('app')
    .component('jeopardyQuestion', {
      bindings: {
        text: '@',
        answer: '@',
        getNextQuestion: '&'
      },
      templateUrl: 'components/jeopardy/jeopardyQuestion/jeopardy-question.html',
      controller: JeopardyQuestionController
    });
})();