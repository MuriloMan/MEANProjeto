//Public/js/controllers/ContatosController.js
angular.module("contatooh").controller("ContatosController", function ($scope, $routeParams, $http) {
  $scope.contatoId = $routeParams.contatoId;	
  
  $scope.incrementa = function () {
    $scope.total++;
  };
  $scope.contatos = [];
//  for (var i=1; i<=10; i++){
//    /*_id por que o mongo gera esse nome por padrão*/
//    $scope.contatos.push({"_id":i,"nome":"contato angular"+ i, "email": "contato"+i+"@empresa.com.br"});
//  }
  $scope.total = $scope.contatos.length;
  $scope.filtro = "";
  
  //FAZENDO REQUISIÇÃO AJAX
  $http.get('/contatos').success(function(data){
    $scope.contatos = data;
  }).error(function(status){
    console.log("error: " + status);
  });
  
});