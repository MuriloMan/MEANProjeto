//config /database.js
var mongoose = require('mongoose');
mongoose.set('debug',true);
module.exports = function (uri) {
  mongoose.connect(uri);
  mongoose.connection.on('connected', function () {
    console.log('mongoose! conectado em ' + uri);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('mongoose! desconectado em ' + uri);
  });
  mongoose.connection.on('error', function (erro) {
    console.log('mongoose!  erro na conexao ' + erro);
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
	 console.log('Mongoose! Desconectado pelo término da aplicação');
	 //0 indica que a finalização ocorreu sem erros
	 process.exit(0);
    });
  });
};