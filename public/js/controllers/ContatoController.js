angular.module('contatooh').controller('ContatoController',
	   function ($scope, $routeParams, $resource) {
		$scope.salva = salva;
		function salva() {
		  $scope.contato.$save()
				.then(function () {
				  $scope.mensagem = {texto: 'salvo com sucesso'};
				  $scope.contato = new Contato();
				}).catch(function () {
		    $scope.mensagem = {texto: 'Falha ao salvar'};
		  });
		}
		if ($routeParams.contatoId) {
		  var Contato = $resource('/contatos/:id');//:id tem q ser igual ao
		  Contato.get({id: $routeParams.contatoId}, //:id dessa linha
				function (contato) {
				  $scope.contato = contato;
				}, function (erro) {
		    $scope.mensagem = {
			 texto: 'Erro ao obter contato'
		    };
		  });
		} else {
		  $scope.contato = {};
		}
	   });