// config/express.js
var load = require('express-load');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	app.use(express.static('./public'));
	
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	// UTILIZA O METHOD-OVERRIDE
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	load('models', {cwd: 'app'}).then('controllers').then('routes')
	.into(app);
	
	return app;
};
