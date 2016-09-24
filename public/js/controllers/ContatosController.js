//Public/js/controllers/ContatosController.js
angular.module("contatooh").controller("ContatosController", function ($scope, $routeParams) {
  console.log($routeParams.contatoId);
  $scope.total = 0;

  $scope.incrementa = function () {
    $scope.total++;
  }
});