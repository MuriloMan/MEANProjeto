//app/models/contato.js
var mongoose = require('mongoose');
module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
	 type: String,
	 required: true
    },
    email: {
	 type: String,//type: [String] para fazer array 
	 required: true,
	 index: {unique: true}/*fazer email ser unico, nao pode ter 2 com mesmo email*/
    },
    emergencia: { /*seria chave estrangeira*/
	 type: mongoose.Schema.ObjectId,
	 ref: 'Contato'
    }
  });
  return mongoose.model('Contato', schema);
};