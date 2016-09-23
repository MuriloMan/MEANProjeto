/*
var http = require('http'); // importa lib http
http.createServer(function (req, res){ //criando servidor, req = requisicao, res = resposta
	res.writeHead(200,{'Content-Type':'text/plain'});// resposta tipo 200 e o tipo de conteudo que virá
	res.end('sou um servidor criado pelo node.js\n');//mostrar resposta no browser
}).listen(3000,'127.0.0.1');//localhost e porta 3k
*/

var http = require ("http");
var app = require ("./config/express")();
http.createServer(app).listen(app.get('port'),function(){
	console.log('Express server escutando a porta' + app.get("port"));
});