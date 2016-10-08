//Public/js/controllers/ContatosController.js
angular.module("contatooh").controller("ContatosController", function ($scope, $resource) {
  $scope.incrementa = function () {
    $scope.total++;
  };
  $scope.contatos = [];
  $scope.filtro= "";

  var Contato = $resource("/contatos/:id");

  function buscaContatos() {
    Contato.query(
		  function (contatos) {
		    $scope.contatos = contatos;
		  }, function (erro) {
	 console.log("Erro: " + erro);
    });
  }
  buscaContatos();
  
});