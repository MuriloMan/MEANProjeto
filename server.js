var http = require('http');
var app = require('./config/express')();
require('./config/passport.js')();
require('./config/database.js')('mongodb://localhost/contatooh');
http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server Escutando na Porta ' + app.get('port'));
});