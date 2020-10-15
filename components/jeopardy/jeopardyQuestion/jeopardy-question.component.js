(function () {
  function JeopardyQuestionController($scope, $sce) {
    var $ctrl = this;

    $ctrl.$onChanges = function () {
      $scope.text = $sce.trustAsHtml($ctrl.text);
    };

    $scope.showAnswer = function () {
      $scope.answer = $sce.trustAsHtml($ctrl.answer);
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