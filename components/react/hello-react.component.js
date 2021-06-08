(function () {
  function HelloReactController() {
    var $ctrl = this;

    $ctrl.name = 'World';

    $ctrl.$onInit = function() {
      $ctrl.props = {
        name: $ctrl.name
      };
    };

    $ctrl.updateName = function() {
      $ctrl.props = {
        name: $ctrl.name
      };
    };
  };

  angular
    .module('app')
    .component('helloReact', {
      templateUrl: 'components/react/hello-react.html',
      controller: HelloReactController
    });
})();