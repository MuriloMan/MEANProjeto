//public/js/main.js

//angular é um objeto global, acessa varios recursos do framework
angular.module("contatooh", ["ng-route"])
	   .config(function ($routeProvider) {
		$routeProvider.when("/contatos", {
		  templateUrl: "partials/contatos.html",
		  controller: "ContatosController"
		});
		$routeProvider.when("/contatos/:contatoId", {
		  templateUrl: "partials/contato.html",
		  controller: "ContatoController"
		});
	   });