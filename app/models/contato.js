//app/models/contato.js
var mongoose = require('mongoose');
module.exports = function (){
  var schema = mongoose.Schema({
    nome:{
	 type:String,
	 required:true
    },
    email:{
	 type:[String],
	 required:true,
	 index:{unique:true}/*fazer email ser unico, nao pode ter 2 com mesmo email*/
    }
  });
};