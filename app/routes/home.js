//app/routes/home.js
//var controller = require("../controllers/home")();
module.exports = function (app) {
  var controller = app.controllers.home;
  app.get("/index", controller.index);
  //app.get("/contatos", controller.listaContatos);
  app.get("/", controller.index);
};