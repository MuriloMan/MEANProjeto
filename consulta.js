var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('580b8a4c482f6bf7967b39bd');

MongoClient.connect('mongodb://localhost:27017/contatooh', function () {
  if (err, db) {
    db.collection('contatos').findOne({_id: _idProcurado},
		  function (err, contato) {
		    if (err)
			 throw err; //err = function 
		    console.log(contato);
		  });
  }
});