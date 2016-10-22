module.exports = function (app) {
  var Contato = app.models.contato;
  var controller = {};

  /*CRUD MONGODB & NODEJS*/
  controller.listaContatos = function (req, res) {
    var promise = Contato.find().exec()
		  .then(function (contatos) {
		    res.json(contatos);
		  }, function (erro) {
		    console.error(erro);
		    res.status(500).json(erro);
		  });
  };
  controller.obtemContato = function (req, res) {
    var _id = req.params.id;
    Contato.findById(_id).exec().then(function (contato) {
	 if (!contato)
	   throw new Error("Contato n encontrado");
	 res.json(contato);
    }, function (erro) {
	 console.log(erro);
	 res.status(404).json(erro);
    });
  };
  controller.removeContato = function (req, res) {};
  controller.salvaContato = function (req, res) {
    var _id = req.params.id;
    req.body.emergencia = req.body.emergencia || null;
    if (_id) {
	 Contato.findByIdAndUpdate(_id, req.body).exec()
		    .then(function (contato) {
			 console.log('atualizando req.body: ');
			 console.log(req.body);
			 res.json(contato);
		    }, function (erro) {
			 console.log(erro);
			 res.status(500).json(erro);
		    });
    } else {
	 Contato.create(req.body)
		    .then(function(contato){
			 res.status(201).json(contato);
		    },function(){
			 console.log(erro);
			 res.status(500).json(erro);
		    });
    }
  };
  
  return controller;
};