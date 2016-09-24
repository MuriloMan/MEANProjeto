module.exports = function() {
	var controller = {};
	controller.index = function(req, res) {
		res.render('index', {nome: 'Teste 2'});
	};
	return controller;
}