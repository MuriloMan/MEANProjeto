//Public/js/controllers/ContatosController.js
angular.module("contatooh").controller("ContatosController", function ($scope, $resource) {
  $scope.incrementa = function () {
    $scope.total++;
  };
  $scope.contatos = [];
  $scope.filtro = "";
  $scope.mensagem = {texto: ''};

  var Contato = $resource("/contatos/:id");

  function buscaContatos() {
    Contato.query(
		  function (contatos) {
		    $scope.contatos = contatos;
		    $scope.mensagem = {texto:''};
		  }, function (erro) {
	 $scope.mensagem = {
	   texto: 'Não foi possivel obter a lista'
	 };
	 console.log("Erro: " + erro);
    });

  }
  buscaContatos();
  $scope.remove = function (contato) {
    Contato.delete({id: contato._id},
		  buscaContatos, //success 2nd function
		  function (erro) { //fail 3rd function
		    console.log("Erro ao recarregar lista de contatos: " + erro);
		    $scope.mensagem = {
			 texto: 'Não foi possivel remoder da lista'
		    };
		  });
  };
});