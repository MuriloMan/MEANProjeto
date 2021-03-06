//public/js/main.js

//angular é um objeto global, acessa varios recursos do framework
angular.module("contatooh", ["ngRoute", "ngResource"])
	   .config(function ($routeProvider) {
		$routeProvider.when("/contatos", {
		  templateUrl: "partials/contatos.html",
		  controller: "ContatosController"
		});
		$routeProvider.when("/contatos/:contatoId", {
		  templateUrl: "partials/contato.html",
		  controller: "ContatoController"
		});
		$routeProvider.when("/contato", {
		  templateUrl: "partials/contato.html",
		  controller: "ContatoController"
		});
		$routeProvider.otherwise({
		  redirectTo: "/contatos"
		});
	   });