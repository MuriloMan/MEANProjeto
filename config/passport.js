var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;
var githubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
  var Usuario = mongoose.model('Usuario');

  passport.use(new githubStrategy({
    clientID: '4e24a2eb59b79b66d67f',
    clientSecret: '8e7cc1598d6e281d4c5d7eeeeff543c320c02577',
    callBack: 'http://localhost:3000/auth/github/callback/'
  }, function (accessToken, refreshToken, profile, done) {
    Usuario.findOrCreate({
	 'login': profile.username
    }, {
	 'nome': profile.username
    }, function (erro, usuario) {
	 if (erro) {
	   console.log(erro);
	   return done(erro);
	 }
	 return done(null, usuario);
    });
  }));
  passport.use(new facebookStrategy({
    clientID: '535683369974987',
    clientSecret: '7ca8fd5332bbf5181abef12960118b67',
    callBack: 'http://localhost:3000/auth/facebook/callback/',
    profileFields: ['id', 'DisplayName'],
    enableProof: true
  }, function (accessToken, refreshToken, profile, done) {
    Usuario.findOrCreate({
	 'login': profile.id
    }, {
	 'nome': profile.displayName
    }, function (erro, usuario) {
	 if (erro) {
	   console.log(erro);
	   return done(erro);
	 }
	 return done(null, usuario);
    });
  }));

  passport.serializeUser(function (usuario, done) {
    done(null, usuario._id);
  });
  passport.deserializeUser(function (id, done) {
    Usuario.findById(id).exec().then(function (usuario) {
	 done(null, usuario);
    });
  });
};