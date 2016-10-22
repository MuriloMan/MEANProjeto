//config /database.js
var mongoose = require('mongoose');
module.exports = function (uri) {
  mongoose.connect(uri);
  mongoose.connect.on('connected', function () {
    console.log('mongoose! conectado em ' + uri);
  });
  mongoose.connect.on('disconnected', function () {
    console.log('mongoose! desconectado em ' + uri);
  });
  mongoose.connect.on('error', function (erro) {
    console.log('mongoose!  erro na conexao ' + erro);
  });
};