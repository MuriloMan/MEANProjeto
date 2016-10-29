var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;
var githubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
  var Usuario = mongoose('Usuario');
  
  passport.use(new githubStrategy({
    clientID : '',
    clientSecret : '',
    CallBack : ''
  },function(accessToken, refreshToken, profile, done){
    Usuario.findOrCreate({
	 'login': profile.username
    },{
	 'nome': profile.username
    },function(erro, usuario){
	 if(erro){
	   console.log(erro);
	   return done(erro);
	 }
	 return done(null, usuario);
    });
  }));
  
  passport.serializeUser(function(usuario,done){
    done(null, usuario._id);
  });
  passport.deserializeUser(function(id,done){
    Usuario.findById(id).exec().then(function(usuario){
	 done(null,usuario);
    });
  });
};